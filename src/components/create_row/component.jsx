import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ member, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{member.name}</td>
      <td>{member.email}</td>
    </tr>
  );
};

Component.displayName = 'TableRow';

Component.propTypes = {
  member: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

Component.defaultProps = {};

export default Component;
