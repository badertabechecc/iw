import { connect } from 'react-redux';

import { IStore } from 'src/redux/rootReducer';

import { startAddItemAction } from 'src/redux/cart/cart.actions';
import { getProducts } from 'src/redux/products/products.selectors';

import Products from './Products';

const mapStateToProps = (state: IStore) => ({
  products: getProducts(state),
});

const mapDispatchToProps = {
  addItem: startAddItemAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
