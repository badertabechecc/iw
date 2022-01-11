import { actionsTypes } from './actionTypes';

export const addOrderAction = ({ orders }) => ({
  type: actionsTypes.add,
  payload: { orders },
});
