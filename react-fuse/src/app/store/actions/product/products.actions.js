import firebaseService from 'app/services/firebaseService';

export const GET_PRODUCTS = 'GET PRODUCTS';
export const SET_PRODUCTS_SEARCH_TEXT = 'SET PRODUCTS SEARCH TEXT';

export const getProducts = () => {
	const request = firebaseService.firestore.collection('products').get();

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
				type: GET_PRODUCTS,
				payload: result,
			});
		});
};

export const setProductsSearchText = (event) => {
	return {
		type: SET_PRODUCTS_SEARCH_TEXT,
		searchText: event.target.value,
	};
};
