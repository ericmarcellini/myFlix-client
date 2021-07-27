import React from 'react';
import {Row, Col, Button, Container, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from "react-router-dom";

export class ProfileView extends React.Component{
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
            email: null,
            birthday: null,
            Favorites: [],
        }
    }

    componentDidMount(){
        let accessToken = localStorage.getItem('token');
        this.getUser(accessToken);
    }

    // gets user 
    getUser(token) {
        const username = localStorage.getItem('user');
        axios.get(`https://myflixdb1112.herokuapp.com/users/${username}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            this.setState({
              Username: response.data.Username,
              Password: response.data.Password,
              Email: response.data.Email,
              Birthdate: response.data.Birthdate,
              FavoriteMovies: response.data.FavoriteMovies,
            });
          });
      }


    render(){
        const { user, onBackClick } = this.props;
        const { movies } = this.props;
        const { FavoriteMovies } = this.props;

        return (

        )
    }
}

ProfileView.propTypes = {
    User: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthdate: PropTypes.string,
        //FavoriteMovies:

    })
}


export default ProfileView;