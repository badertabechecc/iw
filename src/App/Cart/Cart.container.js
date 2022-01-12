import { connect } from 'react-redux';
import { addOrderAction } from '../../redux/orders/orders.actions';
import {
  clearItemsAction,
  startRemoveItemAction,
} from '../../redux/products/products.actions';
import Cart from './Cart';

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  removeItem: startRemoveItemAction,
  addOrder: addOrderAction,
  clearCart: clearItemsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
