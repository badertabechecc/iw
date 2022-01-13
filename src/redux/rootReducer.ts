import { combineReducers } from 'redux';

import productsReducer from './products/products.reducer';
import { IProducts } from './products/products.types';
import cartReducer from './cart/cart.reducer';
import { ICartItems } from './cart/cart.types';

export interface IStore {
  products: IProducts;
  cart: ICartItems;
}

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
