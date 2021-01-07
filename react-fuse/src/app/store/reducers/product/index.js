import { combineReducers } from 'redux';
import product from './product.reducer';
import products from './products.reducer';

const productReducer = combineReducers({
	products,
	product,
});

export default productReducer;
