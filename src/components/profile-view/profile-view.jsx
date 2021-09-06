import React from 'react';
import {Row, Col, Button, Container, Card, Form, Nav, NavBar, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from "react-router-dom";

export class ProfileView extends React.Component{
    constructor() {
        super();
        this.state = {
            Username: "",
            Password: "",
            Email: "",
            Birthday: "",
            FavoriteMovies: [],
            validated: "",
        }
    }

    componentDidMount(){
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null){
            this.getUser(accessToken);
        }
    }

    // gets user 
    getUser(token) {
        const username = localStorage.getItem('user');
        axios.get(`https://myflixdb1112.herokuapp.com/users/${username}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
          .then(response => {
            this.setState({
              Username: response.data.Username,
              Password: response.data.Password,
              Email: response.data.Email,
              Birthday: response.data.Birthday,
              FavoriteMovies: response.data.FavoriteMovies,
            });
          })
          .catch(function (error) {
            console.log(error);
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
            window.open(`localhost:1234`);
        })
        .catch((e) => {
            console.log(e),
            console.log('something broke in handleDeleteUser');
        });
 }

    // update user
    handleUpdateUser = (e) => {
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
            //const data = response.data;
            alert("User is updated!");
            this.setState({
                Username: response.data.Username,
                Password: response.data.Password,
                Email: response.data.Email,
                Birthday: response.data.Birthday,
        })
        localStorage.setItem('user', this.state.Username);
        })
        .catch(function (error){
            console.log(error);
        });
    }

    setUsername(input) {
        this.Username = input;
        this.setState({
         Username : input
        })
    }
    
    setPassword(input) {
        this.Password = input;
        this.setState({
            Password : input
        })
    }
    
    setEmail(input) {
        this.Email = input;
        this.setState({
            Email: input
        })
    }
    
    setBirthdate(input) {
        this.Birthdate = input;
        this.setState({
            Birthdate: input
        })
    }

    /* remove movie from favorite list*/
    handleRemove(Id){        
        const username = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        console.log(Id)
        axios.delete(`https://myflixdb1112.herokuapp.com/users/${username}/movies/${Id}`, {                                  
         headers: { Authorization: `Bearer ${token}`}}
        ).then ((response) => {
           console.log(response);
           this.componentDidMount();
           alert('Movie has been successfully removed from favorites.')
    })
        .catch((e)=> {
            console.log(e)
        })
    }


    render(){
        const { username, Password, email, birthdate, movies, user} = this.props;
        const { movie} = this.props;
        const { FavoriteMovies, validated, Birthday, Birthdate } = this.state;

        return (
        <Container>    
            
            {/* user info */}
        <Row>
            <Col>
                <p>Username: {`${this.state.Username}`}</p>
                <p>Email: {`${this.state.Email}`}</p>
                <p>Favorite Movies:</p>
    
                {FavoriteMovies.length > 0 && movies.map((movie)=> {
                    if (movie._id === FavoriteMovies.find((favList)=> favList === movie._id)){
                        return (
                            <Card>
                                <Card.Img variant='top' src={movie.ImagePath}/>
                                <Card.Body>
                                    <Card.Title>{movie.Title}</Card.Title>
                                    <Card.Text>{movie.Description}</Card.Text>
                                    <Link to={`/movies/${movie._id}`}>
                                        <Button variant='link'>Open</Button>
                                    </Link>
                                <Button value={movie._id}  onClick={ (e)=>{this.handleRemove(e.target.value)}}>
                                    Delete from favorites
                                </Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                })}
            </Col>
        </Row>   
        
            {/* update form */} 
            <h1> Update Form</h1>
        <Form className="updateForm" noValidate validated={validated}  onSubmit={(e) => this.handleUpdateUser(e, this.Username, this.Password, this.Email, this.Birthdate)}>
            <Form.Group controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your new username" value={username} onChange={e => this.setUsername(e.target.value)} required/>
                <Form.Control.Feedback type="invalid">Please provide a valid username.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" value={Password} onChange={e => this.setPassword(e.target.value)} required />
                <Form.Control.Feedback type="invalid">Please provide a valid Password.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="New Email" value={email} onChange={e => this.setEmail(e.target.value)} required />
                <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formGroupBirthdate">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control type="date" placeholder="00-00-0000" value={birthdate} onChange={e => this.setBirthdate(e.target.value)} required />
            </Form.Group> 
            <Button type="submit" onClick={this.handleUpdateUser}> Submit </Button>&nbsp;&nbsp;
           </Form>

            {/* delete user */}
            <Button onClick={(e)=> this.handleDeleteUser(e)}>
                Delete User
            </Button>
        </Container>   
        )
    }
}

ProfileView.propTypes = {
    users: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        Birthdate: PropTypes.string,
        FavoriteMovies: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string.required,
                Title: PropTypes.string.required,
            })
        )
    }),
    movie: PropTypes.shape({
        ImagePath: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
      }),
 
};


export default ProfileView;