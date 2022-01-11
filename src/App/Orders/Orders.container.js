import { connect } from 'react-redux';

import Orders from './Orders';

const mapStateToProps = (state) => ({
  state: state.orders,
});

export default connect(mapStateToProps)(Orders);
