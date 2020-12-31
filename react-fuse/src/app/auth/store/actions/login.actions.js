import firebase from 'firebase/app';
import firebaseService from 'app/services/firebaseService';
import jwtService from 'app/services/jwtService';
import * as Actions from 'app/store/actions';
import * as UserActions from './user.actions';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_GOOGLE_ERROR = 'LOGIN_GOOGLE_ERROR';
export const LOGIN_GOOGLE_SUCCESS = 'LOGIN_GOOGLE_SUCCESS';

export const submitLogin = ({ email, password }) => {
	return (dispatch) =>
		jwtService
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				dispatch(UserActions.setUserData(user));

				return dispatch({
					type: LOGIN_SUCCESS,
				});
			})
			.catch((error) => {
				return dispatch({
					type: LOGIN_ERROR,
					payload: error,
				});
			});
};

export const submitLoginWithFireBase = ({ username, password }) => {
	if (!firebaseService.auth) {
		console.warn("Firebase Service didn't initialize, check your configuration");

		return () => false;
	}

	return (dispatch) =>
		firebaseService.auth
			.signInWithEmailAndPassword(username, password)
			.then(() => {
				return dispatch({
					type: LOGIN_SUCCESS,
				});
			})
			.catch((error) => {
				console.info('error');
				const usernameErrorCodes = [
					'auth/email-already-in-use',
					'auth/invalid-email',
					'auth/operation-not-allowed',
					'auth/user-not-found',
					'auth/user-disabled',
				];
				const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password'];

				const response = {
					username: usernameErrorCodes.includes(error.code) ? error.message : null,
					password: passwordErrorCodes.includes(error.code) ? error.message : null,
				};

				if (error.code === 'auth/invalid-api-key') {
					dispatch(Actions.showMessage({ message: error.message }));
				}

				return dispatch({
					type: LOGIN_ERROR,
					payload: response,
				});
			});
};

export const submitLoginWithGoogle = () => {
	if (!firebaseService.auth) {
		console.warn("Firebase Service didn't initialize, check your configuration");

		return () => false;
	}
	const provider = new firebase.auth.GoogleAuthProvider();

	return (dispatch) =>
		firebaseService.auth
			.signInWithPopup(provider)
			.then(() => {
				return dispatch({
					type: LOGIN_SUCCESS,
				});
			})
			.catch((error) => {
				return dispatch({
					type: LOGIN_ERROR,
					payload: error.message,
				});
			});
};
