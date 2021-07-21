import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

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
                 <Button variant='link'>Director</Button>
                </Link>

                <Link to ={`/genres/${movie.Genre.Name}`}>
                 <Button variant='link'>Genre</Button>
                </Link>
            </div>
        );
    }
}

/* MovieView.PropTypes = {
    movie: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,

        Director: PropType.shape({
            Name: PropType.string.isRequired,
            Birthday: PropType.string.isRequired // Unsure if it was Born or Birthday
        }),

        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),

    })
} */

MovieView.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired
    }).isRequired,
    user: PropTypes.string.isRequired,
    addToFavorties: PropTypes.func,
    onBackClick: PropTypes.func.isRequired
} 