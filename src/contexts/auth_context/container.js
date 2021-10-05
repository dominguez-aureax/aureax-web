import { useDispatch, useSelector } from 'react-redux';

import { BindComponent } from '../../components';

import Component from './component';
import {
  changeLoading,
  changeUser,
  changeID,
  changeReferralLink,
  selectUser,
  changeName,
} from './slice';

const getComponentProps = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);

  const updateName = (value) => dispatch(changeName(value));
  const updateUser = (value) => dispatch(changeUser(value));
  const updateID = (value) => dispatch(changeID(value));
  const updateReferralLink = (value) => dispatch(changeReferralLink(value));
  const updateLoading = (value) => dispatch(changeLoading(value));
  return {
    currentUser,
    updateName,
    updateUser,
    updateID,
    updateReferralLink,
    updateLoading,
  };
};

export default BindComponent(Component, getComponentProps);
