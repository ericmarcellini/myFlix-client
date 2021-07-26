import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


export class DirectorView extends React.Component {
    render(){
        const{ director, onBackClick } = this.props;

        return (
            <div className='director-view'>
                <div className='director-name'>
                    <span className='label'>Name: </span>
                    <span className='value'>{director.Name}</span>
                </div>
                <div className='director-bio'>
                    <span className='label'>Bio: </span>
                    <span className='value'>{director.Bio}</span>
                </div>
                <div className='director-birthday'>
                    <span className='label'>Birthday: </span>
                    <span className='value'>{director.Born}</span>
                </div>
                <Button onClick={()=> {onBackClick(null);}}>Back!</Button>
            </div>
        )
    }
}

DirectorView.propTypes = {
    director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired,
        Born: PropTypes.string.isRequired // Unsure if it was Born or Birthday
    })
}


