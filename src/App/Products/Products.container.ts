import { connect } from 'react-redux';

import { IStore } from '@redux/rootReducer';

// TODO: Replace relative path with absolute path
import { startAddItemAction } from '../../redux/cart/cart.actions';
import { getProducts } from '../../redux/products/products.selectors';

import Products from './Products';

const mapStateToProps = (state: IStore) => ({
  products: getProducts(state)
});

const mapDispatchToProps = {
  addItem: startAddItemAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
