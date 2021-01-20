import * as ProductActions from '../../actions'

const initialState = {
  data: [],
  searchText: '',
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActions.GET_PRODUCTS: {
      return {
        ...state,
        data: action.payload,
        type: action.type,
      }
    }

    case ProductActions.REMOVE_PRODUCTS: {
      return {
        ...state,
        type: action.type,
      }
    }

    case ProductActions.SET_PRODUCTS_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.searchText,
        type: action.type,
      }
    }

    default: {
      return state
    }
  }
}

export default productsReducer
