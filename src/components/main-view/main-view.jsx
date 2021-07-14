import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
export class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      movies: [],
      selectedMovie: null
    };
  }

  componentDidMount(){
    axios.get('https://myflixdb1112.herokuapp.com/movies')
    .then( response => {
      this.setState({
        movies: response.data
      });
    })
    .catch(error=> {
      console.log(error);
    });
  }

  setSelectedMovie(newSelectedMovie){
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render(){
      const {movies, selectedMovie} = this.state;
 ///     if (selectedMovie) return <MovieView movie={selectedMovie} />;

      if (movies.length === 0) return <div className="main-view" />;
          return (
          
            <div className="main-view">
            {selectedMovie

              ? ( 
                <Row className='justify-content-md-center'>
                  <Col md={8}>
                    <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/> 
                  </Col>
                </Row>
                )
              : movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(movie) }}/>
              ))
            }
          </div>
        );
      }
}


export default MainView;