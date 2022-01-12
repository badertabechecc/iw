import { IOrders } from 'redux/orders/orders.types';
import './orders.css';

interface IProps {
  orders: IOrders;
}
const Orders = (props: IProps) => {
  if (props.orders.length === 0) {
    return <div style={{ textAlign: 'center' }}>No hay pedidos</div>;
  }
  return (
    <div>
      <div className='order__items'>
        {props.orders.map((order, index) => {
          return (
            <div className='order'>
              <h2>Pedido nº{index + 1}</h2>
              {Object.values(order).map((item, index) => {
                return (
                  <div className='order__item' key={index}>
                    <img src={item.item.ImageUrl} alt='' />
                    <p>{item.item.Title}</p>
                    <p>x{item.quantity}</p>
                    <h4>{item.item.Price}€</h4>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
