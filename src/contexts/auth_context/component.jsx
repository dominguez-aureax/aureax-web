import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase';
import PropTypes from 'prop-types';
import { updateId } from './slice';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const Component = ({
  children,
  currentUser,
  updateName,
  updateUser,
  updateID,
  updateReferralLink,
  updateLoading,
}) => {
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    console.log('AuthProvider --- Logging Out...');
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      updateLoading(true);
      if (user) {
        updateUser(user);
        updateName(user.displayName);
        updateID(user.getIdToken);
        updateReferralLink('TODO: Implement Referral Link function');
      } else {
        updateUser({});
        updateName('NO CURRENT DISPLAY NAME');
        updateID('NO CURRENT ID');
        updateReferralLink('NO CURRENT REFERRAL LINK');
      }
      updateLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

Component.displayName = 'AuthProvider';

Component.propTypes = {
  children: PropTypes.element.isRequired,
  currentUser: PropTypes.object.isRequired,
  updateName: PropTyhpes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  updateId: PropTypes.func.isRequired,
  updateReferralLink: PropTypes.func.isRequired,
  updateLoading: PropTypes.func.isRequired,
};

Component.defaultProps = {};

export default Component;
