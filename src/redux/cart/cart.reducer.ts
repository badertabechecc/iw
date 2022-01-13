import { AnyAction } from 'redux';
import { actionsTypes } from './cart.actionTypes';
import produce from 'immer';
import { ICartItems } from './cart.types';

const cartInitialState: ICartItems = {};

const cartReducer = (state = cartInitialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionsTypes.add:
        draft[action.payload.id] = {
          id: action.payload.id,
          quantity: 1,
        };
        break;

      case actionsTypes.remove:
        delete draft[action.payload.id];
        break;

      case actionsTypes.update:
        draft[action.payload.id].quantity = action.payload.quantity;
        break;

      case actionsTypes.clear:
        return {};

      default:
        return state;
    }
  });
};

export default cartReducer;
