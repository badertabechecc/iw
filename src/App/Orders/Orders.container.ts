import { connect } from 'react-redux';

import { IStore } from '@redux/rootReducer';

// TODO: Replace relative path with absolute path
import { getOrders } from '../../redux/orders/orders.selectors';
import { getProducts } from '../../redux/products/products.selectors';

import Orders from './Orders';

const mapStateToProps = (state: IStore) => ({
  products: getProducts(state),
  orders: getOrders(state),
});

export default connect(mapStateToProps)(Orders);
