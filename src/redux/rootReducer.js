import { combineReducers } from 'redux';
import productsReducer from './products/reducer';
import ordersReducer from './orders/reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  orders: ordersReducer,
});

export default rootReducer;
