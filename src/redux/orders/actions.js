import { actionsTypes } from './actionTypes';

export const addOrderAction = ({ order }) => ({
  type: actionsTypes.add,
  payload: { order },
});
