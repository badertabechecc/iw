import { IAddOrderAction } from 'redux/orders/orders.actions';
import {
  IStartRemoveItemAction,
  IClearItemsAction,
} from 'redux/products/products.actions';
import { IItems } from 'redux/products/products.types';
import './Cart.css';

interface IProps {
  products: IItems | {};
  removeItem: IStartRemoveItemAction;
  addOrder: IAddOrderAction;
  clearCart: IClearItemsAction;
}

const Cart = (props: IProps) => {
  const handleRemoveItem = (id: string) => {
    props.removeItem({ id });
  };

  const handleAddOrder = () => {
    props.addOrder({ orders: props.products });
    props.clearCart();
  };

  const getTotalPrice = () => {
    return Object.values(props.products).reduce((acc, item) => {
      const price = item.item.Price;
      const quantity = item.quantity;
      return acc + price * quantity;
    }, 0);
  };

  if (Object.keys(props.products).length === 0) {
    return <div className='cart__footer'>No hay productos en el carrito</div>;
  }
  return (
    <div>
      <div className='cart__items'>
        {Object.values(props.products).map((item, index) => {
          return (
            <div className='cart__item' key={index}>
              <img src={item.item.ImageUrl} alt='' />
              <p>{item.item.Title}</p>
              <p>x{item.quantity}</p>
              <h4>{item.item.Price}€</h4>
              <button onClick={() => handleRemoveItem(item.item.Id)}>X</button>
            </div>
          );
        })}
      </div>

      <div className='cart__footer'>
        <h2>Total: {getTotalPrice()}€</h2>
        <button onClick={() => handleAddOrder()}>Comprar</button>
      </div>
    </div>
  );
};

export default Cart;
