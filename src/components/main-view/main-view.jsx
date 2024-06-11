import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Importing components for different views
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
import { NavbarView } from '../navbar-view/navbar-view';
import MoviesList from '../movies-list/movies-list';

// Importing action for Redux
import { setMovies } from '../../actions/actions';
import { connect } from 'react-redux';

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: null,
      user: null,
      userData: null
    };
  }

  componentDidMount() {
    // Retrieve token and user from local storage if available
    let accessToken = localStorage.getItem('token');
    let userToken = localStorage.getItem('user');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user'),
        token: localStorage.getItem('token')
      });
      // Fetch movies and user info upon mounting
      this.getMovies(accessToken);
      this.getUserinfo(accessToken);
    }
  }

  // Handles user login, saves token and user info to state and local storage
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
      userData: authData.user
    });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  // Sets the selected movie in the state
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  // Handles user logout, clears token and user info from state and local storage
  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  // Fetches all movies from the API
  getMovies(token) {
    axios.get('https://myflixdb1112.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      this.props.setMovies(response.data); // Update Redux store with movies
    })
    .catch(error => {
      console.log(error);
    });
  }

  // Fetches specific user information from the API
  getUserinfo(token) {
    axios.get('https://myflixdb1112.herokuapp.com/users/${username}', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      this.setState({
        users: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  // Fetches all users from the API
  getUsers(token) {
    axios.get('https://myflixdb1112.herokuapp.com/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      this.setState({
        users: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  // Handles user signup
  onSignup(signup) {
    console.log(signup);
    this.setState({
      signup,
    });
  }

  render() {
    const { movies } = this.props;
    const { user } = this.state;

    return (
      <Router>
        <NavbarView />
        <div>
          {this.onLoggedIn
            ? <Button variant="outline-danger" onClick={() => { this.onLoggedOut() }}>Logout</Button>
            : <LoginView />
          }
        </div>
        <Row>
          {/* Route for the main view */}
          <Route exact path="/" render={() => {
            if (!user) return <Col><LoginView onLoggedIn={user => this.onLoggedIn(user)} /></Col>
            if (movies.length === 0) return <div className="main-view" />;
            return <MoviesList movies={movies} />;
          }} />

          {/* Route for the signup view */}
          <Route path="/signup" render={() => {
            if (user) return <Redirect to="/" />
            return <Col><SignupView /></Col>
          }} />

          {/* Route for the movie view */}
          <Route path="/movies/:movieId" render={({ match, history }) => {
            if (!user) return <Redirect to="/" />
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          {/* Route for the director view */}
          <Route path="/directors/:name" render={({ match, history }) => {
            if (!user) return <Redirect to="/" />
            return <Col md={8}>
              <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          {/* Route for the genre view */}
          <Route path="/genres/:name" render={({ match, history }) => {
            if (!user) return <Redirect to="/" />
            return <Col md={8}>
              <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
            </Col>
          }} />

          {/* Route for the profile view */}
          <Route path="/profile" render={(match, history) => {
            if (!user) return <Redirect to="/" />
            return <Col md={8}>
              <ProfileView user={this.state.userData} FavoriteMovies={user.FavoriteMovies} movies={movies} onBackClick={() => history.goBack()} />
            </Col>
          }} />
        </Row>
      </Router>
    );
  }
}

// Maps state from Redux store to props
let mapStateToProps = state => {
  return { movies: state.movies }
}

// Connects the component to the Redux store
export default connect(mapStateToProps, { setMovies })(MainView);
