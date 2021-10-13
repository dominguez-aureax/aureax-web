import { useDispatch, useSelector } from 'react-redux';

import { BindComponent } from '../../components';

import Component from './component';
import {
  changeEmail,
  changeError,
  changeName,
  changePassword,
  changePasswordConfirm,
  changePhone,
  selectEmail,
  selectError,
  selectName,
  selectPassword,
  selectPasswordConfirm,
  selectPhone,
} from './slice';
import { changeLoading, selectLoading } from '../../contexts/auth_context/slice';

const getComponentProps = () => {
  const dispatch = useDispatch();

  const currentName = useSelector(selectName);
  const currentEmail = useSelector(selectEmail);
  const currentError = useSelector(selectError);
  const currentPhone = useSelector(selectPhone);
  const currentPassword = useSelector(selectPassword);
  const currentPasswordConfirm = useSelector(selectPasswordConfirm);
  const currentLoading = useSelector(selectLoading);

  return {
    currentName,
    currentEmail,
    currentError,
    currentLoading,
    currentPhone,
    currentPassword,
    currentPasswordConfirm,
    updateName: (value) => dispatch(changeName(value)),
    updateEmail: (value) => dispatch(changeEmail(value)),
    updateError: (value) => dispatch(changeError(value)),
    updateLoading: (value) => dispatch(changeLoading(value)),
    updatePhone: (value) => dispatch(changePhone(value)),
    updatePassword: (value) => dispatch(changePassword(value)),
    updatePasswordConfirm: (value) => dispatch(changePasswordConfirm(value)),
  };
};

const displayName = 'SignUpContainer';

const propTypes = {};

const defaultProps = {};

export default BindComponent(Component, getComponentProps, propTypes, defaultProps, displayName);
