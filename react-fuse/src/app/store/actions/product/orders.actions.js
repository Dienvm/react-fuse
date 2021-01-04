import axios from 'axios';

export const GET_ORDERS = 'GET ORDERS';
export const SET_ORDERS_SEARCH_TEXT = 'SET ORDERS SEARCH TEXT';

export const getOrders = () => {
	const request = axios.get('/api/e-commerce-app/orders');

	return (dispatch) =>
		request.then((response) =>
			dispatch({
				type: GET_ORDERS,
				payload: response.data,
			})
		);
};

export const setOrdersSearchText = (event) => {
	return {
		type: SET_ORDERS_SEARCH_TEXT,
		searchText: event.target.value,
	};
};
