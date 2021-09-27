import React from 'react';
import { Alert, Button } from 'react-bootstrap';

import { useAuth } from '../../contexts/auth_context';

import { Layout } from '../../components';

const Component = () => {
  const { logout } = useAuth();

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
