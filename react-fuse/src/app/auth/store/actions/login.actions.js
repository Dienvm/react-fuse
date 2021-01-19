import firebase from 'firebase/app'
import firebaseService from 'app/services/firebaseService'
import * as Actions from 'app/store/actions'
import { ERROR_CODES } from 'app/constants/errorCodes'

export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const submitLoginWithFireBase = ({ username, password }) => {
  const errorCodes = [
    ...ERROR_CODES.usernameErrorCodes,
    ...ERROR_CODES.emailErrorCodes,
  ]
  if (!firebaseService.auth) {
    // Firebase Service didn't initialize, check your configuration
    return () => false
  }

  return (dispatch) =>
    firebaseService.auth
      .signInWithEmailAndPassword(username, password)
      .then(() =>
        dispatch({
          type: LOGIN_SUCCESS,
        })
      )
      .catch((error) => {
        const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password']

        const response = {
          username: errorCodes.includes(error.code) ? error.message : null,
          password: passwordErrorCodes.includes(error.code)
            ? error.message
            : null,
        }

        if (error.code === 'auth/invalid-api-key') {
          dispatch(Actions.showMessage({ message: error.message }))
        }

        return dispatch({
          type: LOGIN_ERROR,
          payload: response,
        })
      })
}

export const submitLoginWithGoogle = () => {
  if (!firebaseService.auth) {
    // Firebase Service didn't initialize, check your configuration
    return () => false
  }
  const provider = new firebase.auth.GoogleAuthProvider()

  return (dispatch) =>
    firebaseService.auth
      .signInWithPopup(provider)
      .then(() =>
        dispatch({
          type: LOGIN_SUCCESS,
        })
      )
      .catch((error) =>
        dispatch({
          type: LOGIN_ERROR,
          payload: error.message,
        })
      )
}
