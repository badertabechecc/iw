import { connect } from 'react-redux';

import { IStore } from 'src/redux/rootReducer';

import { getOrders } from 'src/redux/orders/orders.selectors';
import { getProducts } from 'src/redux/products/products.selectors';

import Orders from './Orders';

const mapStateToProps = (state: IStore) => ({
  products: getProducts(state),
  orders: getOrders(state),
});

export default connect(mapStateToProps)(Orders);
