import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from "react-router-dom";

export class ProfileView extends React.Component{
    render(){
        const { user, onBackClick } = this.props;

        return (
            <div className='profile-view'>
                <div className='username'>
                    <span className='label'>Username: </span>
                    <span className='value'>{user.Name}</span>
                </div>
                <div className='x'></div>
            </div>
        )
    }
}

ProfileView.propTypes = {
    User: PropTypes.shape({
        Name: PropTypes.string.isRequired,

    })
}