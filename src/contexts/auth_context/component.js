import React, { useContext, useEffect } from 'react';
import { auth, db } from '../../firebase';
import PropTypes from 'prop-types';

const AuthContext = React.createContext();

/**
 * Function that returns the Authentication State of Firebase.
 * @returns useContext
 */
export function useAuth() {
  return useContext(AuthContext);
}

/**
 * Function that will process the current authentication state of the application.
 *
 * The purpose of this function is to wrap the children in a Authentication Provider
 * which will subscribe the children to context changes. Here the context changes are
 * using Firebase.auth which tracks whether there is a current user logged in or not.
 * @param {Object} objVar- Object which contains all necessary keys
 * @param {Element} objVar.children - React children which will be wrapped in the AuthProvider
 * @param {String} [objVar.currentUser] - The current User which is logged in
 * @param {Boolean} objVar.currentLoading - Whether the Authentication Status is still loading
 * @param {Function} objVar.updateName - function which will update the state of the name in redux.
 * @param {Function} objVar.updateUser - function which will update the state of the user in redux.
 * @param {Function} objVar.updateID - function which will update the state of the ID in redux.
 * @param {Function} objVar.updateReferralLink - function which will update the state of the referral link in redux.
 * @param {Function} objVar.updateLoading - function which will update the state of whether the authentication
 * 																					status is loading or not in redux.
 * @returns {Element} - AuthContext.Provider which has wrapped the children given
 */
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
  /**
   * Function that will sign up a new user in firebase.
   *
   * The purpose of this function is to create a new accouint within Firebase. On
   * successful creation iof the user, this user will also be signed into your application.
   * On account creation failure, nothing will happen.
   *
   * @param {String} email -  The user's email address.
   * @param {String} password - The user's chosen password.
   * @param {String} displayName - The user's chosen display name.
   * @param {String} [phone] - The user's chosen phone number.
   *
   * @returns {firebase.auth.UserCredential} - UserCredential which contains 3 keys :
   * 		operationTypes: the type of operation which was used to authenticate the user (such as sign-in or link).
   * 		providerID: The provider which was used to authenticate the user
   * 		user - The user authenticated by this credential.
   */
  async function signup(email, password, name, phone) {
    console.log(`email: ${email}, password: ${password}, name: ${name}, phone: ${phone}`);
    try {
      const value = await auth.createUserWithEmailAndPassword(email, password);
      console.log('successful sign up');
      // If error has not been thrown, user has successfully been signed up.
      const currentU = auth.currentUser;
      await currentU.updateProfile({ displayName: name });
      console.log(`UPDATED PROFILE: ${currentU.displayName}`);
      db.collection('users')
        .doc(email)
        .set({
          name: name,
          email: email,
          phone: phone,
        })
        .then(() => console.log(`A NEW USER HAS BEEN ADDED: ${name}`))
        .catch((e) => console.log(`FAILED TO ADD USER: ${e}`));
      return value;
    } catch (e) {
      console.log(`unsuccessful signup: ${e}`);
      return e;
    }
  }

  /**
   * Function that will login in a user that was already created.
   *
   * The purpose of this functon is to confirm that the user has logged in with
   * the correct email and password combination.
   *
   * @param {String} email - The user's email address.
   * @param {String} password - The user's password.
   *
   * @returns {firebase.auth.UserCredential} - UserCredential which contains 3 keys:
   *  	operationTypes: the type of operation which was used to authenticate the user (such as sign-in or link).
   * 		providerId: The provider which was used to authenticate the user
   * 		user - The user authenticated by this credential.
   */
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Function that will logout current user.
   *
   * The purpose of this function is to allow the logout process to complete through
   * firebase.
   *
   * @returns - Promise<void> - returns an empty promise upon completion
   */
  function logout() {
    return auth.signOut();
  }

  /**
   * Function which will send a reset password email to the user.
   *
   * The purpose of this function is to send a confirmation email to the user
   * that they have requested a password reset. This email will provide a link which
   * they can follow to reset their email.
   *
   * @param {String} email - The email address requesting the password change.
   * @returns - Promise<void> - returns an empty promise upon completion
   */
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  /**
   * Function which will email the original email a confirmation to update.
   *
   * The purpose of this function is to send a confirmation email that will
   * notify the user that the email will be unlinked to the account and to verify
   * this with a link. The reason for this is to avoid hacking/phishing
   *
   * @param {String} email - The new email address that will be associated with the current account.
   *
   * @returns - Promise<void> - returns an empty promise upon completion.
   */
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  /**
   * Function which will update the user's password.
   *
   * The purpose of this function is to update the current user's password to the
   * one given.
   *
   * @param {String} password - The new password to be associated with the given account.
   *
   * @returns - Promise<void> returns an empty promise upon completion
   */
  function updatePassword(password) {
    currentUser.updatePassword(password);
  }

  // The useEffect Hook lets us perform side effects in function components
  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // Add observer for changes to the user's sign-in state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // update loading to be true as a change has occurred
      updateLoading(true);

      //check if there is a user
      if (user) {
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
