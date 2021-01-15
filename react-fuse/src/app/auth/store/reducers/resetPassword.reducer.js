import * as Actions from '../actions';

const initialState = {
  success: false,
  error: {
    username: null,
    password: null,
  },
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case Actions.RESET_PASSWORD_SUCCESS: {
      return {
        ...initialState,
        success: true,
      };
    }
    case Actions.RESET_PASSWORD_ERROR: {
      return {
        success: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default login;
