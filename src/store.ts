// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// import { addProductsAction } from './products/products.actions';

// import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );

// sagaMiddleware.run(rootSaga);

import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { addProducts } from './App/Products/products.slice';
import cartReducer, {
  addToCart,
  clearCart,
  removeFromCart,
} from './App/Cart/cart.slice';
import ordersReducer, { addOrder } from './App/Orders/orders.slice';
import productsList from './productsList';

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

store.dispatch(addProducts({ products: productsList }));
store.dispatch(addToCart({ id: '2' }));
store.dispatch(addToCart({ id: '2' }));
store.dispatch(addToCart({ id: '1' }));
store.dispatch(removeFromCart({ id: '1' }));
store.dispatch(removeFromCart({ id: '2' }));
store.dispatch(clearCart());
store.dispatch(
  addOrder({
    order: {
      '1': {
        id: '1',
        quantity: 1,
      },
    },
  })
);
export type RootState = ReturnType<typeof store.getState>;
export default store;
