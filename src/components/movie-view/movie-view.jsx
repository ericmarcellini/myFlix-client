import React from 'react';
import PropTypes from 'prop-types';

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
                <button onClick={()=> {onBackClick(null);}}>Back!</button>
                
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