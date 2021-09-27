import React from 'react';
import { Alert } from 'react-bootstrap';

import { Layout } from '../../components';

const Component = () => {
  return (
    <Layout>
      <div className='members-page'>
        <Alert variant='info'>TODO: MEMBERS PAGE</Alert>
      </div>
    </Layout>
  );
};

Component.displayName = 'Members';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
