import "./NavBar.css";
import { Link } from "react-router-dom";
import { IItems } from "redux/products/products.types";

interface IProps {
  products: IItems | {};
}
const NavBar = (props: IProps) => {
  const getNumberOfProducts = () => {
    return Object.values(props.products).reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  };
  return (
    <nav>
      <Link className="text" to="/">
        E-commerce
      </Link>

      <div>
        <Link to="/orders">
          <button className="link-btn">Mis pedidos</button>
        </Link>

        <Link to="/cart">
          <button className="link-btn">
            {getNumberOfProducts()} productos
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
