import { IAddOrderAction } from 'src/redux/orders/orders.actions';
import {
  IStartRemoveItemAction,
  IClearItemsAction,
} from 'src/redux/cart/cart.actions';
import { ICartItems } from 'src/redux/cart/cart.types';
import cartStyles from './cart.module.css';
import { IProducts } from 'src/redux/products/products.types';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartSlice,
  clearCart,
  removeFromCart,
  selectCart,
} from 'src/App/Cart/cart.slice';
import { selectProducts } from 'src/App/Products/products.slice';
import { addOrder } from 'src/App/Orders/orders.slice';

const Cart = () => {
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart({ id }));
  };

  const handleAddOrder = () => {
    dispatch(addOrder({ order: cartItems }));
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    return Object.values(cartItems).reduce((acc, cartItem) => {
      const price = products[cartItem.id].Price;
      const quantity = cartItem.quantity;
      return acc + price * quantity;
    }, 0);
  };

  const isCartEmpty = Object.values(cartItems).length === 0;
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
        {Object.values(cartItems).map((cartItem, index) => {
          const product = products[cartItem.id];

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
