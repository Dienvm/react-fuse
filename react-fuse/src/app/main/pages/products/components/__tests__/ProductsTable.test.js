import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Router } from 'react-router-dom'
import * as reactRedux from 'react-redux'

import history from '@history'
import PRODUCTS from 'app/constants'
import ProductsTable from '../ProductsTable'

const mockStore = configureStore()
const store = mockStore({})

afterEach(() => {
  jest.clearAllMocks()
})

describe('Products', () => {
  const useProductsSelector = jest.spyOn(reactRedux, 'useSelector')
  const useSearchSelector = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

  beforeEach(() => {
    useSearchSelector.mockClear()
    useProductsSelector.mockClear()
    useDispatchMock.mockClear()
  })

  const props = {
    products: {
      searchText: 'test',
      data: PRODUCTS,
    },
  }

  it('should render correctly', () => {
    useSearchSelector.mockReturnValue({ searchText: 'test' })
    useProductsSelector.mockReturnValue({ data: PRODUCTS })
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <ProductsTable />
          </Router>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
