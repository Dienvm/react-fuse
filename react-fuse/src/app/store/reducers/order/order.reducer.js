import * as OrderActions from '../../actions';

const initialState = null;

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrderActions.GET_ORDER: {
      return {
        ...action.payload,
      };
    }
    case OrderActions.SAVE_ORDER: {
      return {
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default orderReducer;
