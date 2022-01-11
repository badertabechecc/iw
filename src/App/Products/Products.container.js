import { connect } from 'react-redux';
import { startAddItemAction } from '../../redux/products/actions';
import Products from './Products';

const mapDispatchToProps = {
  addItem: startAddItemAction,
};

export default connect(null, mapDispatchToProps)(Products);
