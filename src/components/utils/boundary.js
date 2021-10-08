import React from 'react';

export default (Component) => {
  var componentName = 'Anonymous';
  if (Component.displayName) {
    componentName = `${Component.displayName}_Boundary`;
  }

  class Boundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      // Update state so that the next render will show the fallback UI.
      return { hasError: Boolean(error) };
    }

    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.error(
        `${Boundary.displayName}.componentDidCatch();`,
        'error=',
        error,
        'errorInfo=',
        errorInfo && errorInfo.compnentStack,
      );
    }

    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <h1 className='text-danger'>*** REACT ERROR; {componentName} ***</h1>;
      }

      return <Component {...this.props} />;
    }
  }

  Boundary.displayName = `${componentName}_BOUNDARY`;

  Boundary.propTypes = Component.propTypes;
  Boundary.defaultProps = Component.defaultProps;

  return Boundary;
};
