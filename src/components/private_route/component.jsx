import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from '../../contexts/auth_context';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  if (currentUser) {
    console.log('THERE IS A CURRENT USER');
  } else {
    console.log('THER IS NO CURRENT USER');
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to='/login' />;
      }}
    ></Route>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
};
