import { actionsTypes } from './products.actionTypes';
import produce from 'immer';

const initialState = {};

const productsReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionsTypes.add:
        draft[action.payload.item.Id] = {
          item: action.payload.item,
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
export default productsReducer;
