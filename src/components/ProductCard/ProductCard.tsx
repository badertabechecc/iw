import { useDispatch } from 'react-redux';
import { IProduct } from 'src/redux/products/products.types';
import { addToCart } from 'src/App/Cart/cart.slice';

import productStyles from './productCard.module.css';

interface IProps {
  product: IProduct;
}

const ProductCard = (props: IProps) => {
  const dispatch = useDispatch();

  const addItem = () => dispatch(addToCart({ id: props.product.Id }));

  return (
    <div className={productStyles.product__card}>
      <div className={productStyles.card__details}>
        <img src={props.product.ImageUrl} alt={props.product.Manufacturer} />
        <div>
          <div className={productStyles.card__title}>
            <h2 className={productStyles.card__title}>{props.product.Title}</h2>
          </div>
          <h2 className={productStyles.card__price}>{props.product.Price}€</h2>
        </div>
      </div>
      <button className={productStyles.card__add_btn} onClick={addItem}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;
