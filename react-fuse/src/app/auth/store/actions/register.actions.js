import { ERROR_CODES } from 'app/constants/errorCodes'
import firebaseService from 'app/services/firebaseService'
import * as Actions from 'app/store/actions'
import * as UserActions from './user.actions'

export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

export function registerWithFirebase(model) {
  if (!firebaseService.auth) {
    // Firebase Service didn't initialize, check your configuration
    return () => false
  }

  const { email, password, displayName } = model
  return (dispatch) =>
    firebaseService.auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        dispatch(
          UserActions.createUserSettingsFirebase({
            ...response.user,
            displayName,
            email,
          })
        )

        return dispatch({
          type: REGISTER_SUCCESS,
        })
      })
      .catch((error) => {
        const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password']

        const response = {
          email: ERROR_CODES.emailErrorCodes.includes(error.code)
            ? error.message
            : null,
          displayName: ERROR_CODES.usernameErrorCodes.includes(error.code)
            ? error.message
            : null,
          password: passwordErrorCodes.includes(error.code)
            ? error.message
            : null,
        }

        if (error.code === 'auth/invalid-api-key') {
          dispatch(Actions.showMessage({ message: error.message }))
        }

        return dispatch({
          type: REGISTER_ERROR,
          payload: response,
        })
      })
}
