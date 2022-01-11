import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { addItemAction, removeItemAction } from './actions';
import { actionsTypes } from './actionTypes';
import { addItem } from './addItem';
import { removeItem } from './removeItem';

export const getItems = (state) => state.products;

export function* addItemSaga({ payload }) {
  try {
    const items = yield select(getItems);
    const itemsUpdated = yield call(addItem, items, payload.item);
    yield put(addItemAction({ items: itemsUpdated }));
  } catch (error) {
    console.log(error.message);
  }
}

export function* removeItemSaga({ payload }) {
  try {
    const items = yield select(getItems);
    const itemsUpdated = yield call(removeItem, items, payload.id);
    yield put(removeItemAction({ items: itemsUpdated }));
  } catch (error) {
    console.log(error.message);
  }
}

export default function* productsSaga() {
  yield all([takeLatest(actionsTypes.startAdd, addItemSaga)]);
  yield all([takeLatest(actionsTypes.startRemove, removeItemSaga)]);
}
