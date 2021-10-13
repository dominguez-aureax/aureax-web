/* eslint-disable */
import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from '../../contexts/auth_context';

import './index.scss';

const Component = ({
  currentName,
  currentEmail,
  currentError,
  currentLoading,
  currentPhone,
  currentPassword,
  currentPasswordConfirm,
  updateName,
  updateEmail,
  updateError,
  updateLoading,
  updatePhone,
  updatePassword,
  updatePasswordConfirm,
}) => {
  const { signup, getUser } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (currentPassword != currentPasswordConfirm) {
      updateError('Passwords do not match');
      return currentError;
    }

    try {
      updateError('');
      updateLoading(true);
      await signup(currentEmail, currentPassword, currentName, currentPhone);
    } catch (e) {
      updateError(`Failed to create an account: ${e}`);
      return currentError;
    }

    updateLoading(false);

    // Check if the user was logged in
    const user = getUser();
    if (user) {
      console.log('moving to dashboard...');
      history.push('/dashboard');
    }
  }

  return (
    <div className='signup-page'>
      <h1>Sign Up</h1>
      {currentError && <Alert variant='danger'>{currentError}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='signUpFullName'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Jane Doe'
            defaultValue={currentName}
            onChange={(event) => updateName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='signUpEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='example@email.com'
            defaultValue={currentEmail}
            onChange={(event) => updateEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='signUpPhone'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='888-888-8888'
            defaultValue={currentPhone}
            onChange={(event) => updatePhone(event.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='signUpPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            defaultValue={currentPassword}
            onChange={(event) => updatePassword(event.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='signUpPasswordConfirm'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            defaultValue={currentPasswordConfirm}
            onChange={(event) => updatePasswordConfirm(event.target.value)}
          />
        </Form.Group>

        <Button disabled={currentLoading} variant='primary' type='submit'>
          Sign Up
        </Button>

        <div className='w-100 text-center mt-2'>
          Already have an account?
          <Link to='/login'>Log In</Link>
        </div>
      </Form>
    </div>
  );
};

Component.displayName = 'SignUp';

Component.propTypes = {
  currentEmail: PropTypes.string.isRequired,
  currentError: PropTypes.string.isRequired,
  currentLoading: PropTypes.bool.isRequired,
  currentName: PropTypes.string.isRequired,
  currentPhone: PropTypes.string.isRequired,
  currentPassword: PropTypes.string.isRequired,
  currentPasswordConfirm: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updateError: PropTypes.func.isRequired,
  updateLoading: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
  updatePhone: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updatePasswordConfirm: PropTypes.func.isRequired,
};

Component.defaultProps = {};

export default Component;
