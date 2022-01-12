import { all, spawn } from 'redux-saga/effects';
import productsSagas from './cart/cart.sagas';

export default function* root() {
  yield all([spawn(productsSagas)]);
}
