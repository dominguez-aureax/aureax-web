import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';

import { useAuth } from '../../contexts/auth_context';

import { Layout } from '../../components';

const Component = () => {
  const { logout } = useAuth();
  const location = useLocation();

	// There is more than likely a better way to ensure the path is updated, look into this
  if (location.pathname !== '/dashboard') {
    const history = useHistory();
    history.push('/dashboard');
  }

  return (
    <Layout>
      <div className='dashboard'>
        <Alert variant='info'>TODO: DASHBOARD PAGE</Alert>
        <Button variant='primary' type='submit' onClick={logout}>
          Sign Out
        </Button>
      </div>
    </Layout>
  );
};

Component.displayName = 'Dashboard';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
