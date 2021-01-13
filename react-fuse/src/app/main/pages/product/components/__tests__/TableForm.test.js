import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import * as reactRedux from 'react-redux';

import history from '@history';
import { formProps } from './Header.test';
import TableForm from '../TableForm';

const mockStore = configureStore();
const store = mockStore({});

describe('Products', () => {
	const props = {
		form: formProps,
		handleChange: jest.fn(),
		handleChipChange: jest.fn(),
		handleUploadChange: jest.fn(),
		setFeaturedImage: jest.fn(),
		classes: {},
		loadingImage: false,
	};

	it('should render correctly', () => {
		// useDispatchMock.mockReturnValue()
		const tree = renderer
			.create(
				<Provider store={store}>
					<Router history={history}>
						<TableForm {...props} />
					</Router>
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
