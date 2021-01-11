import * as UserActions from '../../actions';

const initialState = {
	data: [],
	searchText: '',
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case UserActions.GET_USERS: {
			return {
				...state,
				data: action.payload,
			};
		}
		case UserActions.REMOVE_USERS: {
			return {
				...state,
				type: action.type,
			};
		}
		case UserActions.SET_USERS_SEARCH_TEXT: {
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

export default usersReducer;
