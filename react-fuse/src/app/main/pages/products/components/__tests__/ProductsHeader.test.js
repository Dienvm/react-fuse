import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';

import ProductsHeader from '../ProductsHeader';
import history from '@history';

const mockStore = configureStore();
const store = mockStore({});

describe('Products', () => {
	it('should render correctly', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					{/* <Router history={history}> */}
					{/* </Router> */}
					<ProductsHeader />
				</Provider>
			)
			.toJSON();
		// const wrapper = mount(<Products />)
		expect(tree).toMatchSnapshot();
	});
});
