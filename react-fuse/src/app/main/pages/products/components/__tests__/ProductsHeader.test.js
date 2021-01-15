import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import * as reactRedux from 'react-redux';

import history from '@history';
import ProductsHeader from '../ProductsHeader';

const mockStore = configureStore();
const store = mockStore({});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Products', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  const props = {
    product: {
      products: {
        searchText: 'test',
      },
    },
  };

  it('should render correctly', () => {
    useSelectorMock.mockReturnValue(props);
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <ProductsHeader />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
