import auth from 'app/auth/store/reducers';
import { combineReducers } from 'redux';
import fuse from './fuse';
import product from './product';

const createReducer = (asyncReducers) =>
	combineReducers({
		auth,
		fuse,
		product,
		...asyncReducers,
	});

export default createReducer;
