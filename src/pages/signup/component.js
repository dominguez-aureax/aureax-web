import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import './index.css';

export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('SIGNUP SCREEN - name: ' + name);
    console.log('SIGNUP SCREEN - email: ' + email);
    console.log('SIGNUP SCREEN - phone: ' + phone);
    console.log('SIGNUP SCREEN - password: ' + password);
    console.log('SIGNUP SCREEN - confirm password: ' + confirmPassword);
  };

  return (
    <div className='signup-wrapper'>
      <h1>Sign Up</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formFullName'>
          <Form.Label>FullName</Form.Label>
          <Form.Control
            type='text'
            placeholder='Jane Doe'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='example@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPOhone'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='888-888-8888'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
