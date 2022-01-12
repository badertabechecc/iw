import { AnyAction } from 'redux';
import produce from 'immer';
import { actionsTypes } from './products.actionTypes';
import { IProducts } from './products.types';

const initialState: IProducts = {};

const productsReducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionsTypes.add:
        return action.payload.products;
        break;
    }
  });
};
export default productsReducer;
