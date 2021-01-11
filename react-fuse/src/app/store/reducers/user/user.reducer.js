import * as UserActions from '../../actions';

const initialState = {};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case UserActions.GET_USER: {
			return {
				...state,
				...action.payload,
			};
		}
		default: {
			return state;
		}
	}
};

export default usersReducer;
