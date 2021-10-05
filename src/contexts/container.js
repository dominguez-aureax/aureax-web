import { useDispatch, useSelector } from 'react-redux';

import { BindComponent } from '../components';

import Component from './component';
import {
  changeUser,
  changeID,
  changeReferralLink,
  selectUser,
  selectID,
  selectReferralLink,
} from './slice';

const getComponentProps = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);
  const currentID = useSelector(selectID);
  const currentReferralLink = useSelector(selectReferralLink);

  const updateUser = () => dispatch(changeUser());
  const updateID = () => dispatch(changeID());
  const updateReferralLink = () => dispatch(changeReferralLink());
  return {
    currentUser,
    currentID,
    currentReferralLink,
  };
};

export default BindComponent(Component, getComponentProps);
