import { IItems } from 'redux/products/products.types';
import { actionsTypes } from './orders.actionTypes';

interface IAddOrderActionPayload {
  orders: IItems;
}

export type IAddOrderAction = ({ orders }: IAddOrderActionPayload) => {
  type: typeof actionsTypes.add;
  payload: {
    orders: typeof orders;
  };
};

export const addOrderAction = ({ orders }: IAddOrderActionPayload) => ({
  type: actionsTypes.add,
  payload: { orders },
});
