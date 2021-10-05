import React, { useContext, useEffect } from 'react';
import { auth } from '../../firebase';
import PropTypes from 'prop-types';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function Component({
  children,
  currentUser,
  currentLoading,
  updateName,
  updateUser,
  updateID,
  updateReferralLink,
  updateLoading,
}) {
  console.log('STARTING...');
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
    console.log('USE EFFECT CALLED');
    const unsubscribe = auth.onAuthStateChanged((user) => {
      updateLoading(true);
      console.log('LOADING IS NOW TRUE');
      if (user) {
        console.log('USE EFFECT HAS FOUND A USER');
        updateUser(JSON.stringify(user));
        updateName(user.displayName);
        user
          .getIdToken()
          .then((result) => {
            updateID(result);
          })
          .catch((e) => {
            console.log('AUTH PROVIDER --- ID ERROR DETECTED');
            console.log(e);
            updateID('ERROR RETRIEVING ID');
          });
        updateReferralLink('TODO: Implement Referral Link function');
      } else {
        console.log('USE EFFECT HAS NOT FOUND A USER');
        updateUser('');
        updateName('NO CURRENT DISPLAY NAME');
        updateID('NO CURRENT ID');
        updateReferralLink('NO CURRENT REFERRAL LINK');
      }
      updateLoading(false);
      console.log('LOADING IS NOW FALSE');
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    currentLoading,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{!currentLoading && children}</AuthContext.Provider>;
}

Component.displayName = 'AuthContext';

Component.propTypes = {
  children: PropTypes.element.isRequired,
  currentUser: PropTypes.string,
  currentLoading: PropTypes.bool.isRequired,
  updateName: PropTypes.func,
  updateUser: PropTypes.func,
  updateID: PropTypes.func,
  updateReferralLink: PropTypes.func,
  updateLoading: PropTypes.func,
};

Component.defaultProps = {
  currentUser: '',
  updateUser: () => console.log('ERROR!!!'),
  updateName: () => console.log('ERROR!!!'),
  updateID: () => console.log('ERROR!!!'),
  updateReferralLink: () => console.log('ERROR!'),
  updateLoading: () => console.log('ERROR!!!'),
};

export default Component;
