import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import history from '@history';
import Header from '../Header';

describe('Login page', () => {
	const mockStore = configureStore();
	const store = mockStore({});
	const historyMock = {
		push: jest.fn(),
		location: {},
		listen: jest.fn(),
		createBrowserHistory: jest.fn(),
	};

	it('should render correctly', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<Router history={historyMock}>
						<Header />
					</Router>
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
