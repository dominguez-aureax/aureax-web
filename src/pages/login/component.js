import React, { useRef, useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from '../../contexts/auth_context';

import './index.scss';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      history.push('/dashboard');
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      {error && <Alert variant='danger'>{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='loginEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter Email' ref={emailRef} required />
        </Form.Group>

        <Form.Group className='mb-3' controlId='loginPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password' ref={passwordRef} required />
        </Form.Group>

        <Form.Group className='mb-3' controlId='loginCheckbox'>
          <Form.Check type='checkbox' label='Remember Me' />
        </Form.Group>

        <Button disabled={loading} variant='primary' type='submit'>
          Log In
        </Button>

        <div className='text-center'>
          Need an account?
          <li>
            <Link to='/signup'>Sign Up!</Link>
          </li>
        </div>
      </Form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
