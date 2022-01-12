import { actionsTypes } from './products.actionTypes';
import { Item } from './products.types';

//PAYLOAD TYPES
interface IAddItemActionPayload {
  item: Item;
}

interface IRemoveItemActionPayload {
  id: string;
}

type IStartAddItemAction = IAddItemActionPayload;

type IStartRemoveItemActionPayload = IRemoveItemActionPayload;

interface IUpdateItemActionPayload {
  id: string;
  quantity: number;
}

//ACTION TYPES
export type IAddItemAction = ({ item }: IAddItemActionPayload) => {
  type: typeof actionsTypes.add;
  payload: {
    item: typeof item;
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

export type IClearItemsAction = () => {
  type: typeof actionsTypes.clear;
};

//ACTIONS
export const addItemAction = ({ item }: IAddItemActionPayload) => ({
  type: actionsTypes.add,
  payload: { item },
});

export const removeItemAction = ({ id }: IRemoveItemActionPayload) => ({
  type: actionsTypes.remove,
  payload: { id },
});

export const clearItemsAction = () => ({
  type: actionsTypes.clear,
});

export const startAddItemAction = ({ item }: IStartAddItemAction) => ({
  type: actionsTypes.startAdd,
  payload: { item },
});

export const startRemoveItemAction = ({
  id,
}: IStartRemoveItemActionPayload) => ({
  type: actionsTypes.startRemove,
  payload: { id },
});

export const updateItemAction = ({
  id,
  quantity,
}: IUpdateItemActionPayload) => ({
  type: actionsTypes.update,
  payload: { id, quantity },
});
