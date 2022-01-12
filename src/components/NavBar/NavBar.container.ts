import { connect } from 'react-redux';

import { IStore } from '@redux/rootReducer';

// TODO: Replace relative path with absolute path
import { getCartItems } from '../../redux/cart/cart.selectors';

import NavBar from './NavBar';

const mapStateToProps = (state: IStore) => ({
  cartItems: getCartItems(state),
});

export default connect(mapStateToProps)(NavBar);
