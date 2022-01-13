import { connect } from 'react-redux';

import { IStore } from 'src/redux/rootReducer';

import { startRemoveItemAction } from 'src/redux/cart/cart.actions';
import { getProducts } from 'src/redux/products/products.selectors';
import { getCartItems } from 'src/redux/cart/cart.selectors';

import Cart from './Cart';

const mapStateToProps = (state: IStore) => ({
  products: getProducts(state),
  cartItems: getCartItems(state),
});

const mapDispatchToProps = {
  removeItem: startRemoveItemAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
