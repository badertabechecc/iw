import { connect } from 'react-redux';
import { addItemAction } from '../../redux/products/actions';
import Products from './Products';

const mapDispatchToProps = {
  addItem: addItemAction,
};

export default connect(null, mapDispatchToProps)(Products);
