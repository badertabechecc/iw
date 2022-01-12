import { all, spawn } from 'redux-saga/effects';
import productsSaga from './products/products.saga';

export default function* root() {
  yield all([spawn(productsSaga)]);
}
