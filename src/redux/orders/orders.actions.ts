import { ICartItems } from 'src/redux/cart/cart.types';
import { actionsTypes } from './orders.actionTypes';

interface IAddOrderActionPayload {
  order: ICartItems;
}

export type IAddOrderAction = ({ order }: IAddOrderActionPayload) => {
  type: typeof actionsTypes.add;
  payload: IAddOrderActionPayload;
};

export const addOrderAction = ({ order }: IAddOrderActionPayload) => ({
  type: actionsTypes.add,
  payload: { order },
});
