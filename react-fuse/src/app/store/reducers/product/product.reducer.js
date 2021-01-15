import * as ProductActions from '../../actions'

const initialState = {
  data: null,
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActions.GET_PRODUCT: {
      return {
        ...state,
        data: action.payload,
      }
    }
    case ProductActions.SAVE_PRODUCT: {
      return {
        ...state,
        data: action.payload,
        type: action.type,
      }
    }
    case ProductActions.UPDATE_PRODUCT: {
      return {
        ...state,
        data: action.payload,
        type: action.type,
      }
    }
    default: {
      return state
    }
  }
}

export default productReducer
