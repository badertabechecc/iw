import './ProductCard.css';
import { Item } from 'redux/products/products.types';
import { IAddItemAction } from 'redux/products/products.actions';

interface IProps {
  product: Item;
  addItem: IAddItemAction;
}

const ProductCard = (props: IProps) => {
  const handleClick = () => {
    props.addItem({ item: props.product });
  };

  return (
    <div className='card'>
      <div className='card__details'>
        <img src={props.product.ImageUrl} alt={props.product.Manufacturer} />
        <div>
          <h2 className='product__title'>{props.product.Title}</h2>
          <h2>{props.product.Price}€</h2>
        </div>
      </div>
      <button onClick={handleClick}>Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;
