import { IAddOrderAction } from 'src/redux/orders/orders.actions';
import {
  IStartRemoveItemAction,
  IClearItemsAction,
} from 'src/redux/cart/cart.actions';
import { ICartItems } from 'src/redux/cart/cart.types';
import cartStyles from './cart.module.css';
import { IProducts } from 'src/redux/products/products.types';

interface IProps {
  products: IProducts;
  cartItems: ICartItems;
  removeItem: IStartRemoveItemAction;
  addOrder: IAddOrderAction;
  clearCart: IClearItemsAction;
}

const Cart = (props: IProps) => {
  const handleRemoveItem = (id: string) => {
    props.removeItem({ id });
  };

  const handleAddOrder = () => {
    props.addOrder({ order: props.cartItems });
    props.clearCart();
  };

  const getTotalPrice = () => {
    return Object.values(props.cartItems).reduce((acc, cartItem) => {
      const price = props.products[cartItem.id].Price;
      const quantity = cartItem.quantity;
      return acc + price * quantity;
    }, 0);
  };

  const isCartEmpty = Object.values(props.cartItems).length === 0;
  if (isCartEmpty) {
    return (
      <div className={cartStyles.cart__footer}>
        No hay productos en el carrito
      </div>
    );
  }

  return (
    <div>
      <div className={cartStyles.cart__items}>
        {Object.values(props.cartItems).map((cartItem, index) => {
          const product = props.products[cartItem.id];

          return (
            <div className={cartStyles.cart__item} key={index}>
              <div></div>
              <img src={product.ImageUrl} alt='' />
              <p>{product.Title}</p>
              <div className={cartStyles.price__container}>
                <p className={cartStyles.quantity}>x{cartItem.quantity}</p>
                <h4>{product.Price}€</h4>
                <button
                  className={cartStyles.remove}
                  onClick={() => handleRemoveItem(product.Id)}
                >
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className={cartStyles.cart__footer}>
        <h2>Total: {getTotalPrice()}€</h2>
        <button className={cartStyles.btn_buy} onClick={handleAddOrder}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Cart;
