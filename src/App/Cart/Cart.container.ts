import { connect } from 'react-redux';

import { IStore } from 'src/redux/rootReducer';

import {
  clearItemsAction,
  startRemoveItemAction,
} from 'src/redux/cart/cart.actions';
import { getProducts } from 'src/redux/products/products.selectors';
import { getCartItems } from 'src/redux/cart/cart.selectors';
import { addOrderAction } from 'src/redux/orders/orders.actions';

import Cart from './Cart';

const mapStateToProps = (state: IStore) => ({
  products: getProducts(state),
  cartItems: getCartItems(state),
});

const mapDispatchToProps = {
  removeItem: startRemoveItemAction,
  addOrder: addOrderAction,
  clearCart: clearItemsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
