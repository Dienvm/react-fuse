import auth from 'app/auth/store/reducers';
import { combineReducers } from 'redux';
import fuse from './fuse';
import product from './product';
import order from './order';

const createReducer = (asyncReducers) =>
	combineReducers({
		auth,
		fuse,
		product,
		order,
		...asyncReducers,
	});

export default createReducer;
