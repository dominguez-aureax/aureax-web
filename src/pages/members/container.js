/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { BindComponent } from '../../components';

import Component from './component';
import { selectMembers, addMember } from './slice';

const getComponentProps = ({ db }) => {
  const dispatch = useDispatch();

  const members = useSelector(selectMembers);
  db.collection('users')
    .get()
    .then((snapshot) => {
      snapshot.forEach((user) => {
        console.log(user.data());
        dispatch(addMember(JSON.stringify(user.data())));
      });
    });

  return {
    members,
  };
};

const displayName = 'MembersContainer';

const propTypes = {
  db: PropTypes.shape({
    collection: PropTypes.func.isRequired,
  }),
};

const defaultProps = {};

export default BindComponent(Component, getComponentProps, propTypes, defaultProps, displayName);
