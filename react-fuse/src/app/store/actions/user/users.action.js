import firebaseService from 'app/services/firebaseService';

export const GET_USERS = 'GET USERS';
export const SET_USERS_SEARCH_TEXT = 'SET USERS SEARCH TEXT';
export const REMOVE_USERS = 'REMOVE USERS';

export const getUsers = () => {
	const request = firebaseService.db.ref('users').once('value');

	return (dispatch) =>
		request.then((snapshot) => {
			const users = snapshot.val();

			return dispatch({
				type: GET_USERS,
				payload: users,
			});
		});
};

export const removeUsers = (userIds) => {
	const batch = firebaseService.firestore.batch();

	// eslint-disable-next-line no-plusplus
	for (let index = 0; index < userIds.length; index++) {
		const element = userIds[index];
		const ref = firebaseService.firestore.collection('products').doc(element);
		batch.delete(ref);
	}

	batch.commit();
	return {
		type: REMOVE_USERS,
	};
};

export const setUsersSearchText = (value) => {
	return {
		type: SET_USERS_SEARCH_TEXT,
		searchText: value,
	};
};
