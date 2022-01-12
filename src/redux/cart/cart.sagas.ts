import { all, put, takeLatest, select } from 'redux-saga/effects';

import {
  addItemAction,
  removeItemAction,
  updateItemAction,
} from './cart.actions';
import { actionsTypes } from './cart.actionTypes';
import { getCartItems } from './cart.selectors';
import { ICartItems } from './cart.types';

interface IAddToCartSaga {
  type: string;
  payload: {
    id: string;
  };
}

interface IRemoveItemSaga {
  type: string;
  payload: {
    id: string;
  };
}

export function* addToCartSaga({ payload }: IAddToCartSaga) {
  try {
    const { id: itemId } = payload;
    const selectedItems: ICartItems = yield select(getCartItems);
    const selectedItem = selectedItems[itemId];

    if (selectedItem) {
      const itemQuantity = selectedItem.quantity;
      yield put(updateItemAction({ id: itemId, quantity: itemQuantity + 1 }));
    } else {
      yield put(addItemAction({ id: itemId }));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* removeItemSaga({ payload }: IRemoveItemSaga) {
  try {
    const { id: itemId } = payload;
    const selectedItems: ICartItems = yield select(getCartItems);
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
