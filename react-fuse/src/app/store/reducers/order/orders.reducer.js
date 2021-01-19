import * as OrderActions from '../../actions'

const initialState = {
  data: [],
  searchText: '',
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrderActions.GET_ORDERS: {
      return {
        ...state,
        data: action.payload,
      }
    }

    case OrderActions.REMOVE_ORDERS: {
      return {
        ...state,
        type: action.type,
      }
    }

    case OrderActions.SET_ORDERS_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.searchText,
      }
    }

    default: {
      return state
    }
  }
}

export default ordersReducer
