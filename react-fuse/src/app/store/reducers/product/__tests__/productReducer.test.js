import PRODUCTS from 'app/constants/stubDb';
import reducer from '../product.reducer';
import * as ProductActions from '../../../actions';

const initialState = {
	data: null,
};

describe('Test initial state', () => {
	it('should test initial state', () => {
		expect(reducer(undefined, initialState)).toEqual(initialState);
	});
});

describe('Product reducer', () => {
	it('should get current product correctly', () => {
		expect(
			reducer(initialState, {
				payload: PRODUCTS[0],
				type: ProductActions.GET_PRODUCT,
			})
		).toEqual({ data: PRODUCTS[0] });
	});
});

describe('Product reducer', () => {
	it('should update product info correctly', () => {
		const updateProduct = { ...PRODUCTS[0], name: 'test' };
		expect(
			reducer(initialState, {
				payload: updateProduct,
				type: ProductActions.UPDATE_PRODUCT,
			})
		).toEqual({ data: updateProduct, type: ProductActions.UPDATE_PRODUCT });
	});
});
