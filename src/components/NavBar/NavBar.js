import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav>
      <Link className='text' to='/'>
        E-commerce
      </Link>

      <Link to='/cart'>
        <button>{props.state.length} products</button>
      </Link>
    </nav>
  );
};

export default NavBar;
