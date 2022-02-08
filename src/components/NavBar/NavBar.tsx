import { Link } from 'react-router-dom';

import { BsFillCartFill } from 'react-icons/bs';

import navBarStyles from './navBar.module.css';
import { selectCart } from 'src/App/Cart/cart.slice';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cartItems = useSelector(selectCart);

  const getNumberOfProducts = () => {
    return Object.values(cartItems).reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
  };
  return (
    <nav>
      <Link className={navBarStyles.text} to='/'>
        E-commerce
      </Link>

      <div>
        <Link to='/'>
          <button className={navBarStyles['link-btn']}>Productos</button>
        </Link>
        <Link to='/orders'>
          <button className={navBarStyles['link-btn']}>Mis pedidos</button>
        </Link>

        <Link to='/cart'>
          <button className={navBarStyles['link-btn']}>
            {getNumberOfProducts() === 0 ? null : (
              <span className={navBarStyles.number__products}>
                {getNumberOfProducts()}
              </span>
            )}
            <BsFillCartFill />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
