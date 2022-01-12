import { combineReducers } from 'redux';
import productsReducer from './products/products.reducer';
import ordersReducer from './orders/orders.reducer';

const rootReducer = combineReducers({
  products: productsReducer,
  orders: ordersReducer,
});

export default rootReducer;
