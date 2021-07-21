import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { DirectorView} from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';


export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [],
      selectedMovie: null
    };
  }

  componentDidMount(){
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null){
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }


  // Log-in 
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  setSelectedMovie(newSelectedMovie){
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  // Log-out
  onLoggedOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user:null
    });
  }

  // gets all movies
  getMovies(token) {
    axios.get('https://myflixdb1112.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    
    .then(response => {
      // assign the result to the state
      this.setState({
        movies: response.data
      });
    })  
      .catch(function (error){
        console.log(error);
      });   
  }

  // gets all users
  getUsers(token){
    axios.get('https://myflixdb1112.herokuapp.com/users', {
      headers: { Authorization: `Beared ${token}`}
    })

    .then(response => {
      this.setState({
        users: response.data
      });
    })

    .catch(function (error){
      console.log(error);
    });
  }

  onSignup(signup) {
    console.log(signup);
    this.setState({
      signup,
    });
  }

  render() {
    <button onClick={()=> { this.onLoggedOut() }} >Logout</button>
    const { movies, user } = this.state;

    if (!user) return <Row>
      <Col>
        <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
      </Col>
    </Row>

    return (
      <Router>
          <Route exact path="/" render={() => {
             if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if (movies.length === 0) return <div className="main-view" />;
            return movies.map(m => (
            <Col md={3} key={m._id}>
              <MovieCard movie={m} />
            </Col>
            ))
            }} />

          <Route path="/signup" render={() => {
            if (user) return <Redirect to='/'/>
            return <Col>
            <SignupView />
            </Col>
            }} />

          <Route path="/movies/:movieId" render={({ match, history }) => {
            if(!user) return <Redirect to="/" />
            return <Col md={8}>
              <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={()=> history.goBack()} />
            </Col>
            }} />

          <Route path="/directors/:name" render={({ match, history }) => {
            if(!user) return <Redirect to="/" />
            return <Col md={8}>
              <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={()=> history.goBack()} />
            </Col>
            }} />

          <Route path="/genres/:name" render={({ match, history }) => {
            if(!user) return <Redirect to="/" />
            return <Col md={8}>
              <GenreView genre={genre.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={()=> history.goBack()} />
            </Col>
            }} />
            
          </Router> 
    );
  }
}


export default MainView;