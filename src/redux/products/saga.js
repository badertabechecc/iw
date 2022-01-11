import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { addItemAction, removeItemAction, updateItemAction } from './actions';
import { actionsTypes } from './actionTypes';
import { removeItem } from './removeItem';

export const getItems = (state) => state.products;

export function* addToCartSaga({ payload }) {
  try {
    const { Id: itemId } = payload.item;
    const selectedItems = yield select(getItems);
    const selectedItem = selectedItems[itemId];

    if (selectedItem) {
      const itemQuantity = selectedItem.quantity;
      yield put(updateItemAction({ id: itemId, quantity: itemQuantity + 1 }));
    } else {
      yield put(addItemAction({ item: payload.item }));
    }
  } catch (error) {
    console.log(error.message);
  }
}

export function* removeItemSaga({ payload }) {
  try {
    const itemId = payload.id;
    const selectedItems = yield select(getItems);
    const selectedItem = selectedItems[itemId];
    const itemQuantity = selectedItem.quantity;

    if (itemQuantity === 1) {
      yield put(removeItemAction({ id: itemId }));
    } else {
      yield put(updateItemAction({ id: itemId, quantity: itemQuantity - 1 }));
    }
  } catch (error) {
    console.log(error.message);
  }
}

export default function* productsSaga() {
  yield all([takeLatest(actionsTypes.startAdd, addToCartSaga)]);
  yield all([takeLatest(actionsTypes.startRemove, removeItemSaga)]);
}
