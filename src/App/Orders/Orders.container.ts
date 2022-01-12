import { connect } from 'react-redux';
import { IStore } from 'redux/rootReducer';

import Orders from './Orders';

const mapStateToProps = (state: IStore) => ({
  orders: state.orders,
});

export default connect(mapStateToProps)(Orders);
