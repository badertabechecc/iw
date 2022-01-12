import { actionsTypes } from './orders.actionTypes';

export const addOrderAction = ({ orders }) => ({
  type: actionsTypes.add,
  payload: { orders },
});
