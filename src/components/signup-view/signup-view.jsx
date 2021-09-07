import React, { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export function SignupView(props){
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');
    const validated = useState(null);

const handleSubmit = (e) => {
    e.preventDefault();
    let setisValid = formValidation();
    if (setisValid){
        axios.post('https://myflixdb1112.herokuapp.com/users', {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
          })
          .then(response => {
            const data = response.data;
            console.log(data);
            alert("User created sucessfully")
            window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
          })
          .catch(e => {
            alert('Username Already taken')
          });

        console.log(username, password, email, birthday);
        props.onSignup(username, password, email, birthday);
    };
  };

    /* Form Validation */
  const formValidation = () => {
    const usernameError = {};
    const emailError = {};
    const passwordError = {};
    const birthdayError = {};

    let isValid = true;
    if (username.length < 6 ){
      usernameError.usernameBad = 'Username must be alphanumeric and at least 6 characters long.'
      isValid = false;
    }
    else if (!email.includes('@')) {
      emailError.emailBad = 'Please enter your email.'
      isValid = false;
    }
    else if (password.length < 6) {
      passwordError.passwordBad = 'Your password must be at least 6 characters long.'
      isValid = false;
    }
    else if (birthday === '') {
      birthdayError.birthdayBad = 'Please enter your birthday.'
      isValid = false;
    }
    return isValid;
  };

  return (
    <Form className="RegForm" onSubmit={handleSubmit} noValidate validated={validated}>

      <Form.Group controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} required />
        <Form.Control.Feedback type="invalid">Please provide a valid username, 6 characters or more.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter a Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
        <Form.Text>Password must be at least 6 characters long</Form.Text>
      </Form.Group>

      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="example@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
        <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
        <Form.Text>We will never share your information</Form.Text>
      </Form.Group>

       <Form.Group controlId="formGroupBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" placeholder="00-00-0000" value={birthday} onChange={e => setBirthday(e.target.value)} required />
      </Form.Group> 

      <span>
        <Button type="submit" onClick={handleSubmit}>Submit</Button> &nbsp;&nbsp;
        <Button variant="secondary" onClick={history.goBack}>Back</Button>
      </span>
    </Form >
  )
} 


SignupView.propTypes = {
    signup: PropTypes.shape({
      Username: PropTypes.string.isRequired,
      Password: PropTypes.string.isRequired,
      Email: PropTypes.string.isRequired,
      Birthdate: PropTypes.string.isRequired
    }),
  };