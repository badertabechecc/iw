import { connect } from 'react-redux';

import { IStore } from 'src/redux/rootReducer';

import { getCartItems } from 'src/redux/cart/cart.selectors';

import NavBar from './NavBar';

const mapStateToProps = (state: IStore) => ({
  cartItems: getCartItems(state),
});

export default connect(mapStateToProps)(NavBar);
