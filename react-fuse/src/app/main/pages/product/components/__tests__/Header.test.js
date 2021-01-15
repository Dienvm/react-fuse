import React from 'react'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import {Router} from 'react-router-dom'
import * as reactRedux from 'react-redux'

import history from '@history'
import Header from '../Header'

const mockStore = configureStore()
const store = mockStore({})

// eslint-disable-next-line import/prefer-default-export
export const formProps = {
  active: true,
  categories: ['test'],
  comparedPrice: '11',
  depth: '1',
  description: 'testaseasdfsdf asdfasf sdfasfs asdfsaf',
  extraShippingFee: '1',
  featuredImageId: 'fe9b3867',
  handle: '',
  height: '1',
  id: 'test',
  images: [
    {
      id: 'fe9b3867',
      type: 'image',
      url: 'https://test.png',
    },
  ],
  name: 'Orion An',
  priceTaxExcl: '11',
  priceTaxIncl: '11',
  quantity: '1',
  sku: '132123',
  tags: ['test'],
  taxRate: '11',
  weight: '1',
  width: '1',
}

afterEach(() => {
  jest.clearAllMocks()
})

describe('Products', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

  beforeEach(() => {
    useDispatchMock.mockClear()
  })

  const props = {
    form: formProps,
    productData: {
      data: {
        id: 'test',
        name: 'test',
      },
    },
    productId: 'test',
  }

  it('should render correctly', () => {
    // useDispatchMock.mockReturnValue()
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <Header {...props} />
          </Router>
        </Provider>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
