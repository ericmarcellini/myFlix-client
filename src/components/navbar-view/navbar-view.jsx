import React from 'react';
import {Row, Col, Button, Container, Card, Form , Navbar, Nav} from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from "react-router-dom";

export class NavbarView extends React.Component{
    constructor(){
        super();
        this.state={}
    }

    render (){
        const { user } = this.props;
        const home = `/`;
        {/*const movies = `/movies`;*/}
        const profile = `/profile`;
        const signup = `/signup`;
        return(    
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand> MyFlix</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to = {home}>Home</Nav.Link>
                    <Nav.Link as={Link} to = {home}>Movies</Nav.Link> {/* Home displays all movies for now. */}
                    <Nav.Link as={Link} to = {profile}>Profile</Nav.Link>
                    <Nav.Link as={Link} to = {signup}>Sign Up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
}
}

export default NavbarView