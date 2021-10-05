import React from 'react';
import Boundary from './boundary';

/**
 * Function that will bind state changes in a continer with UI Component.
 *
 * The purpose of this function is to take out the difficult portion of learning react - 'How can
 * update the state properly that makes sense'. Creating a Boundary allows everything to be combined
 * within the boundary using a Container ( where we handle state changes ) and a Component ( where
 * we handle the User Interface). Allowing these to be separate creates better isolation which leads
 * to  better testing and faster development
 *
 * @param {Element} Component - The User Interface display.
 * @param {Function} getComponentProps - Transforms the given parameters to necessary state changes (sometimes unchanged).
 * @param {Object} propTypes - The PropTypes necessary for the Container and/or Component;
 * @param {Object} defaultProps - The default state of props if not given.
 */
export default (Component, getComponentProps, propTypes, defaultProps, displayName) => {
  const Container = (props) => <Component {...getComponentProps(props)} />;
  Container.displayName = `${displayName} || DEFAULT_NAME`;
  Container.propTypes = propTypes || Component.propTypes;
  Container.defaultProps = defaultProps || Component.defaultProps;

  return Boundary(Container);
};
