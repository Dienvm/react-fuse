import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from '@history';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';

const Component = () => <div>test</div>;

describe('Login page', () => {
	const mockStore = configureStore();
	const store = mockStore({});

	it('should render correctly', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<Router history={history}>
						<FuseTheme>
							<FuseLayout />
						</FuseTheme>
						{/* <Component /> */}
					</Router>
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
