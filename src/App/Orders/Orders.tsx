import { useSelector } from 'react-redux';
import { ICartItems } from 'src/redux/cart/cart.types';
import { IOrders } from 'src/redux/orders/orders.types';
import { IProducts } from 'src/redux/products/products.types';
import { selectOrders } from 'src/App/Orders/orders.slice';
import { selectProducts } from 'src/App/Products/products.slice';

import ordersStyles from './orders.module.css';

const Orders = () => {
  const orders = useSelector(selectOrders);
  const products = useSelector(selectProducts);

  const getTotalPrice = (order: ICartItems) => {
    return Object.values(order).reduce((acc, orderProduct) => {
      const price = products[orderProduct.id].Price;
      const quantity = orderProduct.quantity;
      return acc + price * quantity;
    }, 0);
  };

  if (orders.length === 0) {
    return (
      <div className={ordersStyles['order__no-items']}>No hay pedidos</div>
    );
  }
  return (
    <div>
      <div className={ordersStyles.order__items}>
        {orders.map((order, index) => {
          return (
            <div className={ordersStyles.order} key={'order' + index}>
              <h2>Pedido nº{index + 1}</h2>
              {Object.values(order).map((orderProduct, index) => {
                return (
                  <div className={ordersStyles.order__item} key={index}>
                    <img src={products[orderProduct.id].ImageUrl} alt='' />
                    <p>{products[orderProduct.id].Title}</p>
                    <div className={ordersStyles.price__container}>
                      <p className={ordersStyles.quantity__order}>
                        x{orderProduct.quantity}
                      </p>
                      <h4>{products[orderProduct.id].Price}€</h4>
                    </div>
                  </div>
                );
              })}
              <h3 className={ordersStyles.total}>
                Total {getTotalPrice(order)}€
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
