import { connect } from 'react-redux';
import { IStore } from 'redux/rootReducer';
import NavBar from './NavBar';

const mapStateToProps = (state: IStore) => ({
  products: state.products,
});

export default connect(mapStateToProps)(NavBar);
