import { connect } from 'react-redux';
import NavBar from './NavBar';

const mapStateToProps = (state) => ({
  state: state.products,
});

export default connect(mapStateToProps)(NavBar);
