import React, { useRef, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/auth_context';

import './index.scss';

export default function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do no match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  return (
    <div className='signup-wrapper'>
      <h1>Sign Up</h1>
      {error && <Alert variant='danger'>{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='signupFullName'>
          <Form.Label>FullName</Form.Label>
          <Form.Control type='text' placeholder='Jane Doe' ref={nameRef} required />
        </Form.Group>

        <Form.Group className='mb-3' controlId='signupEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='example@email.com' ref={emailRef} required />
        </Form.Group>

        <Form.Group className='mb-3' controlId='signupPhone'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type='text' placeholder='888-888-8888' ref={phoneRef} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='signupPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' ref={passwordRef} required />
        </Form.Group>

        <Form.Group className='mb-3' controlId='signupConfirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Password' ref={passwordConfirmRef} required />
        </Form.Group>

        <Button disabled={loading} variant='primary' type='submit'>
          Sign Up
        </Button>

        <div className='w-100 text-center mt-2'>
          Alread have an account?
          <Link to='/login'>Log In</Link>
        </div>
      </Form>
    </div>
  );
}
