import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import * as reactRedux from 'react-redux';

import history from '@history';
import ProductsTableHead from '../ProductsTableHead';

const mockStore = configureStore();
const store = mockStore({});

describe('Products', () => {
  const props = {
    numSelected: 1,
    order: {
      direction: 'asc',
      id: 'test',
    },
    onSelectAllClick: jest.fn(),
    onRequestSort: jest.fn(),
    rowCount: 2,
    handleRemoveProducts: jest.fn(),
  };
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <ProductsTableHead {...props} />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
