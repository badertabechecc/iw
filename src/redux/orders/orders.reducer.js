import { actionsTypes } from './orders.actionTypes';
import produce from 'immer';

const initialState = [];

const ordersReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionsTypes.add:
        draft.push(action.payload.orders);
        break;

      default:
        return state;
    }
  });
};

export default ordersReducer;
