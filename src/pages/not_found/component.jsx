import React from 'react';
import { Alert } from 'react-bootstrap';

import { Layout } from '../../components';

import './index.scss';

const Component = () => {
  return (
    <Layout>
      <div className='error-page'>
        <Alert variant='info'>TODO: NOT FOUND PAGE</Alert>
      </div>
    </Layout>
  );
};

Component.displayName = 'NotFound';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
