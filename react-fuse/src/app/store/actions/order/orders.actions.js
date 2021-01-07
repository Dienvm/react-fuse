import firebaseService from 'app/services/firebaseService';

export const GET_ORDERS = 'GET ORDERS';
export const SET_ORDERS_SEARCH_TEXT = 'SET ORDERS SEARCH TEXT';

export const getOrders = () => {
	const request = firebaseService.firestore.collection('orders').get();

	return (dispatch) =>
		request.then((docs) => {
			const result = [];
			docs.forEach((doc) => {
				const data = {
					...doc.data(),
					id: doc.id,
				};
				result.push(data);
			});

			return dispatch({
				type: GET_ORDERS,
				payload: result,
			});
		});
};

export const setOrdersSearchText = (event) => {
	return {
		type: SET_ORDERS_SEARCH_TEXT,
		searchText: event.target.value,
	};
};
