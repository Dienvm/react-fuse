import * as ProductActions from '../../actions';

const initialState = {
	data: [],
	searchText: '',
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ProductActions.GET_PRODUCTS: {
			return {
				...state,
				data: action.payload,
			};
		}
		case ProductActions.REMOVE_PRODUCTS: {
			return {
				...state,
				// data: action.payload,
			};
		}
		case ProductActions.SET_PRODUCTS_SEARCH_TEXT: {
			return {
				...state,
				searchText: action.searchText,
			};
		}
		default: {
			return state;
		}
	}
};

export default productsReducer;
