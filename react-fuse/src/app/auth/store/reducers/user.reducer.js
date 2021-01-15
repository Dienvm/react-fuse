import * as Actions from '../actions';

const initialState = {
  role: [],
  data: {
    displayName: '',
    photoURL: '',
    email: '',
    shortcuts: [],
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_USER_DATA: {
      return {
        ...initialState,
        ...action.payload,
        type: action.type,
      };
    }
    case Actions.REMOVE_USER_DATA: {
      return {
        ...initialState,
      };
    }
    case Actions.USER_LOGGED_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default user;
