import axios from 'axios';

export const GET_PRODUCTS = 'GET PRODUCTS';
export const SET_PRODUCTS_SEARCH_TEXT = 'SET PRODUCTS SEARCH TEXT';

export const getProducts = () => {
	const request = axios.get('/api/e-commerce-app/products');

	return (dispatch) =>
		request.then((response) =>
			dispatch({
				type: GET_PRODUCTS,
				payload: response.data,
			})
		);
};

export const setProductsSearchText = (event) => {
	return {
		type: SET_PRODUCTS_SEARCH_TEXT,
		searchText: event.target.value,
	};
};
