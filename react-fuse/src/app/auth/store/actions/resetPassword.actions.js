import firebaseService from 'app/services/firebaseService';

export const RESET_PASSWORD_ERROR = 'RESET PASSWORD ERROR';
export const RESET_PASSWORD_SUCCESS = 'RESET PASSWORD SUCCESS';

export function resetPassword({ email }) {
	if (!firebaseService.auth) {
		console.warn("Firebase Service didn't initialize, check your configuration");

		return () => false;
	}

	return dispatch =>
		firebaseService.auth
			.sendPasswordResetEmail(email)
			.then(() => {
				return dispatch({
					type: RESET_PASSWORD_SUCCESS
				});
			})
			.catch(error => {
				return dispatch({
					type: RESET_PASSWORD_ERROR,
					payload: error.message
				});
			});
}
