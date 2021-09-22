import React from 'react';
import Boundary from './boundary';

export default (Component, getComponentProps, propTypes, defaultProps, displayName) => {
  const Container = (props) => <Component {...getComponentProps(props)} />;
  Container.displayName = `${displayName} || DEFAULT_NAME `;
  Container.propTypes = propTypes || Component.propTypes;
  Container.defaultProps = defaultProps || Component.defaultProps;

  return Boundary(Container);
};
