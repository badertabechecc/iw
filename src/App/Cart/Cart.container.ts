import { connect } from 'react-redux';

import { IStore } from '@redux/rootReducer';

// TODO: Replace relative path with absolute path
import {
  clearItemsAction,
  startRemoveItemAction,
} from '../../redux/cart/cart.actions';
import { getProducts } from '../../redux/products/products.selectors';
import { getCartItems } from '../../redux/cart/cart.selectors';
import { addOrderAction } from '../../redux/orders/orders.actions';

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
