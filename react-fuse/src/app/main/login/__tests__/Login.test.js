import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import history from '@history';
import LoginPage from '../Login';

describe('Login page', () => {
	const mockStore = configureStore();
	const store = mockStore({});

	it('should render correctly', () => {
		const tree = renderer
			.create(
				<Router history={history}>
					{/* <Provider store={store}> */}
					<LoginPage />
					{/* </Provider> */}
				</Router>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
