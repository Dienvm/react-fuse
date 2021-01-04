import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';

export const GET_ORDER = 'GET ORDER';
export const SAVE_ORDER = 'SAVE ORDER';

export const getOrder = (params) => {
	const request = axios.get('/api/e-commerce-app/order', { params });

	return (dispatch) =>
		request.then((response) =>
			dispatch({
				type: GET_ORDER,
				payload: response.data,
			})
		);
};

export const saveOrder = (data) => {
	const request = axios.post('/api/e-commerce-app/order/save', data);

	return (dispatch) =>
		request.then((response) => {
			dispatch(showMessage({ message: 'Order Saved' }));

			return dispatch({
				type: SAVE_ORDER,
				payload: response.data,
			});
		});
};
