import { AnyAction } from 'redux';
import { actionsTypes } from './orders.actionTypes';
import produce from 'immer';
import { IOrders } from './orders.types';

export type IOrdersInitialState = IOrders;

const initialState: IOrdersInitialState = [];

const ordersReducer = (state = initialState, action: AnyAction) => {
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
