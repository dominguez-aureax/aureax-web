import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { BrowserRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.css';

// make a POST request to the server.
// TODO: put this in a separate directory, you'll add the service directly to
// the component
async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };

  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Remember Me' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Log In
        </Button>

        <div className='text-center'>
          Need an account?
          <BrowserRouter>
            <Link to='/signup'>Sign Up!</Link>
          </BrowserRouter>
        </div>
      </Form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
