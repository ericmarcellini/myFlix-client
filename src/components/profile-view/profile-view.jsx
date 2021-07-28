import React from 'react';
import {Row, Col, Button, Container, Card, Form } from 'react-bootstrap';
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

    // delete user
    handleDeleteUser(e){
        const username = localStorage.getItem('user'); 
        const token = localStorage.getItem('token');
        axios.delete(`https://myflixdb1112.herokuapp.com/users/${username}`, {
            headers: { Authorization: `Bearer ${token}`}
        })
        .then(() => {
            alert('You have successfully deleted your account!');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            window.open(`https://myflixdb1112.herokuapp.com/`);
        })
        .catch((e) => {
            console.log(e),
            console.log('something broke in handleDeleteUser');
        });
 }

    // update user
    handleUpdateUser(e){
        this.setState({
            validated: null
        });

        const form = e.currentTarget;
        if (form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
            this.setState({
                validated: true,
            });
            return;
        } e.preventDefault();

        const username = localStorage.getItem('user');
        const token = localStorage.getItem('token')

        axios.put(`https://myflixdb1112.herokuapp.com/users/${username}`,{
                Username: this.state.Username,
                Password: this.state.Password,
                Email: this.state.Email,
                Birthday: this.state.Birthday,
            },
            {headers: { Authorization: `Bearer ${token}` }}
        )
        .then((response) => {
            const updatedData = response.updatedData;
            alert(user + " is updated!")
            console.log(response.updatedData);
            console.log(updatedData);
            console.log(user + " is updated");
        })
        .catch(function (error){
            console.log(error.response.updatedData);
        });
    }

    setUsername(input) {
        this.Username = input;
    }
    
    setPassword(input) {
        this.Password = input;
    }
    
    setEmail(input) {
        this.Email = input;
    }
    
    setBirthdate(input) {
        this.Birthdate = input;
    }

    render(){
        const { user, onBackClick, movies, FavoriteMovies } = this.props;
        return (
        <Container>    
            /* User Info */
        <Row>
            <Col>
            <p>Username: {`${this.props.username}`}</p>
            <p>Email: {`${this.props.Email}`}</p>
            <p>Birthday: {`${this.state.Birthday}`}</p>
            <p>Favorite Movies: </p>
            </Col>
        </Row>
            /* Favorite Movies */
            /* update form */
             
            <h1> Update Form</h1>
        <Form className="updateForm" noValidate validated={validated}  onSubmit={(e) => this.handleUpdateUser(e, this.Username, this.Password, this.Email, this.Birthdate)}>
            <Form.Group controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your new username" value={username} onChange={e => this.setUsername(e.target.value)} required/>
                <Form.Control.Feedback type="invalid">Please provide a valid username.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" value={password} onChange={e => setPassword(e.target.value)} required />
                <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="New Email" value={email} onChange={e => setEmail(e.target.value)} required />
                <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGroupBirthdate">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control type="date" placeholder="00-00-0000" value={birthdate} onChange={e => setBirthdate(e.target.value)} required />
            </Form.Group> 
            <Button type="submit"> Submit </Button>
           </Form>





            /* delete user */
            <Button onClick={(e)=> this.handleDeleteUser(e)}>
                Delete User
            </Button>

        </Container>   
        )
    }
}

ProfileView.propTypes = {
    User: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthdate: PropTypes.string,
        FavoriteMovies: PropTypes.array,

    })
}


export default ProfileView;