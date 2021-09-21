import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import { default as Sidebar } from '../sidebar';

import './index.scss';

const Component = ({ children }) => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='other-content'>{children}</div>
    </div>
  );
};

Component.displayName = 'Layout';

Component.propTypes = {
  children: PropTypes.element,
};

Component.defaultProps = {
  children: <Alert variant='danger'>MISSING CHILDREN</Alert>,
};

export default Component;
