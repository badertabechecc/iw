import { AnyAction } from 'redux';
import produce from 'immer';
import { actionsTypes } from './products.actionTypes';
import { IItem } from './products.types';

export type IProductsInitialState = {
  [K in string]: {
    item: IItem;
    quantity: number;
  };
};

const initialState: IProductsInitialState = {};
type Index = string;

const productsReducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionsTypes.add:
        draft[action.payload.item.Id as Index] = {
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
