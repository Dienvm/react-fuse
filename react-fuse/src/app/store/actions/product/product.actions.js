import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';

export const GET_PRODUCT = 'GET PRODUCT';
export const SAVE_PRODUCT = 'SAVE PRODUCT';

export const getProduct = (params) => {
	const request = axios.get('/api/e-commerce-app/product', { params });

	return (dispatch) =>
		request.then((response) =>
			dispatch({
				type: GET_PRODUCT,
				payload: response.data,
			})
		);
};

export const saveProduct = (data) => {
	const request = axios.post('/api/e-commerce-app/product/save', data);

	return (dispatch) =>
		request.then((response) => {
			dispatch(showMessage({ message: 'Product Saved' }));

			return dispatch({
				type: SAVE_PRODUCT,
				payload: response.data,
			});
		});
};

export const newProduct = () => {
	const data = {
		id: FuseUtils.generateGUID(),
		name: '',
		handle: '',
		description: '',
		categories: [],
		tags: [],
		images: [],
		priceTaxExcl: 0,
		priceTaxIncl: 0,
		taxRate: 0,
		comparedPrice: 0,
		quantity: 0,
		sku: '',
		width: '',
		height: '',
		depth: '',
		weight: '',
		extraShippingFee: 0,
		active: true,
	};

	return {
		type: GET_PRODUCT,
		payload: data,
	};
};
