import { ICartItem } from 'src/redux/cart/cart.types';

import { actionsTypes } from './cart.actionTypes';

export type IClearItemsAction = () => {
  type: typeof actionsTypes.clear;
};
export const clearItemsAction = () => ({
  type: actionsTypes.clear,
});

// ---------------------------------------------------------------

//PAYLOAD TYPES
interface IAddItemActionPayload {
  id: string;
}

interface IRemoveItemActionPayload {
  id: string;
}

type IStartAddItemAction = IAddItemActionPayload;

type IStartRemoveItemActionPayload = IRemoveItemActionPayload;

//ACTION TYPES
export type IAddItemAction = ({ id }: IAddItemActionPayload) => {
  type: typeof actionsTypes.add;
  payload: {
    id: typeof id;
  };
};

export type IStartRemoveItemAction = ({
  id,
}: IStartRemoveItemActionPayload) => {
  type: typeof actionsTypes.add;
  payload: {
    id: typeof id;
  };
};

//ACTIONS
export const addItemAction = ({ id }: IAddItemActionPayload) => ({
  type: actionsTypes.add,
  payload: { id },
});

export const removeItemAction = ({ id }: IRemoveItemActionPayload) => ({
  type: actionsTypes.remove,
  payload: { id },
});

export const startAddItemAction = ({ id }: IStartAddItemAction) => ({
  type: actionsTypes.startAdd,
  payload: { id },
});

export const startRemoveItemAction = ({
  id,
}: IStartRemoveItemActionPayload) => ({
  type: actionsTypes.startRemove,
  payload: { id },
});

export const updateItemAction = ({ id, quantity }: ICartItem) => ({
  type: actionsTypes.update,
  payload: { id, quantity },
});
