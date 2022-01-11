import { connect } from 'react-redux';
import { addOrderAction } from '../../redux/orders/actions';
import {
  clearItemsAction,
  removeItemAction,
} from '../../redux/products/actions';
import Cart from './Cart';

const mapStateToProps = (state) => ({
  state: state.products,
});

const mapDispatchToProps = {
  removeItem: removeItemAction,
  addOrder: addOrderAction,
  clearCart: clearItemsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
