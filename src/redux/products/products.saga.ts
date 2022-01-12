import { all, put, takeLatest, select } from 'redux-saga/effects';
import { IStore } from 'redux/rootReducer';
import {
  addItemAction,
  removeItemAction,
  updateItemAction,
} from './products.actions';
import { actionsTypes } from './products.actionTypes';
import { IItems, Item } from './products.types';

interface IAddToCartSaga {
  type: string;
  payload: {
    item: Item;
  };
}

interface IRemoveItemSaga {
  type: string;
  payload: {
    id: string;
  };
}

export const getItems = (state: IStore) => state.products;

export function* addToCartSaga({ payload }: IAddToCartSaga) {
  try {
    const { Id: itemId } = payload.item;
    const selectedItems: IItems = yield select(getItems);
    const selectedItem = selectedItems[itemId];

    if (selectedItem) {
      const itemQuantity = selectedItem.quantity;
      yield put(updateItemAction({ id: itemId, quantity: itemQuantity + 1 }));
    } else {
      yield put(addItemAction({ item: payload.item }));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* removeItemSaga({ payload }: IRemoveItemSaga) {
  try {
    const itemId = payload.id;
    const selectedItems: IItems = yield select(getItems);
    const selectedItem = selectedItems[itemId];
    const itemQuantity = selectedItem.quantity;

    if (itemQuantity === 1) {
      yield put(removeItemAction({ id: itemId }));
    } else {
      yield put(updateItemAction({ id: itemId, quantity: itemQuantity - 1 }));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* productsSaga() {
  yield all([takeLatest(actionsTypes.startAdd, addToCartSaga)]);
  yield all([takeLatest(actionsTypes.startRemove, removeItemSaga)]);
}
