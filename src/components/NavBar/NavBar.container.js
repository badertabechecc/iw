import { connect } from 'react-redux';
import NavBar from './NavBar';

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(NavBar);
