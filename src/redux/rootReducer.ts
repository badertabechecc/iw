import { combineReducers } from 'redux';
import productsReducer, {
  IProductsInitialState,
} from './products/products.reducer';
import ordersReducer, { IOrdersInitialState } from './orders/orders.reducer';

export interface IStore {
  products: IProductsInitialState;
  orders: IOrdersInitialState;
}

const rootReducer = combineReducers({
  products: productsReducer,
  orders: ordersReducer,
});

export default rootReducer;
