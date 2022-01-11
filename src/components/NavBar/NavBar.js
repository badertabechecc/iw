import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const getNumberOfProducts = () => {
    return Object.values(props.state).reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  };
  return (
    <nav>
      <Link className='text' to='/'>
        E-commerce
      </Link>

      <Link to='/orders'>
        <button>Orders</button>
      </Link>

      <Link to='/cart'>
        <button>{getNumberOfProducts()} products</button>
      </Link>
    </nav>
  );
};

export default NavBar;
