import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import BindComponent from '../../components/utils/bind_component';

import Component from './component';
import {
  changeLoading,
  changeUser,
  changeID,
  changeReferralLink,
  selectUser,
  changeName,
  selectLoading,
} from './slice';

const getComponentProps = ({ children }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);
  const currentLoading = useSelector(selectLoading);

  const updateName = (value) => dispatch(changeName(value));
  const updateUser = (value) => dispatch(changeUser(value));
  const updateID = (value) => dispatch(changeID(value));
  const updateReferralLink = (value) => dispatch(changeReferralLink(value));
  const updateLoading = (value) => dispatch(changeLoading(value));
  return {
    children,
    currentUser,
    currentLoading,
    updateName,
    updateUser,
    updateID,
    updateReferralLink,
    updateLoading,
  };
};

const displayName = 'AuthContextContainer';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const defaultProps = {};

export default BindComponent(Component, getComponentProps, propTypes, defaultProps, displayName);
