import * as UserActions from '../../actions'

const initialState = {}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActions.GET_USER: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case UserActions.SAVE_USER: {
      return {
        ...state,
        type: action.type,
      }
    }
    default: {
      return state
    }
  }
}

export default usersReducer
