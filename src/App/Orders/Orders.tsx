import { IOrder, IOrders } from "redux/orders/orders.types";
import "./orders.css";

interface IProps {
  orders: IOrders;
}
const Orders = (props: IProps) => {
  const getTotalPrice = (products: IOrder) => {
    return Object.values(products).reduce((acc, item) => {
      const price = item.item.Price;
      const quantity = item.quantity;
      return acc + price * quantity;
    }, 0);
  };

  if (props.orders.length === 0) {
    return <div style={{ textAlign: "center" }}>No hay pedidos</div>;
  }
  return (
    <div>
      <div className="order__items">
        {props.orders.map((order, index) => {
          return (
            <div className="order">
              <h2>Pedido nº{index + 1}</h2>
              {Object.values(order).map((item, index) => {
                return (
                  <div className="order__item" key={index}>
                    <img src={item.item.ImageUrl} alt="" />
                    <p>{item.item.Title}</p>
                    <div className="price__container">
                      <p className="quantity__order">x{item.quantity}</p>
                      <h4>{item.item.Price}€</h4>
                    </div>
                  </div>
                );
              })}
              <h3 className="total">Total {getTotalPrice(order)}€</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;