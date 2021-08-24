import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";

export class MovieView extends React.Component {

    keypressCallback(event){
        console.log(event.key);
    }

    componentDidMount(){
        document.addEventListener('keypress', this.keypressCallback);
    }

    componentWillUnmount(){
        document.removeEventListener('keypress', this.keypressCallback);
    }
    
    addFav(){
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('user');

        axios.post(`https://myflixdb1112.herokuapp.com/users/${username}/movies/${this.props.movie._id}`, {
          headers: { Authorization: `Bearer ${token}` }
    })
        .then(response => {
            console.log('Movie added to favorite list')
        })
    }
    render() {
        const { movie, onBackClick } = this.props;

        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.ImagePath}/>
                </div>
                <div className ="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                </div>
                <div className ="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description}</span>
                </div>
                <Button onClick={()=> {onBackClick(null);}}>Back!</Button>
                
                <Link to={`/directors/${movie.Director.Name}`}>
                 <Button variant='secondary'>Director</Button>
                </Link>

                <Link to ={`/genres/${movie.Genre.Name}`}>
                 <Button variant='secondary'>Genre</Button>
                </Link>

                <Button variant='dark' onClick={(e)=> this.addFav(movie, e)}>
                    Add to favorites
                </Button>
            </div>
        );
    }
}


MovieView.propTypes = {
    movie: PropTypes.shape({
        ImagePath: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,

        /* Director: PropType.shape({
            Name: PropType.string.isRequired,
            Birthday: PropType.string.isRequired, // Unsure if it was Born or Birthday
        }),

        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }), */
    }),
} 
 