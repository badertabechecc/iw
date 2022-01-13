import ordersStyles from './orders.module.css';

const Orders = (props: any) => {
  const getTotalPrice = (order: any) => 'Implement getTotalPrice';

  if (props.orders.length === 0) {
    return (
      <div className={ordersStyles['order__no-items']}>No hay pedidos</div>
    );
  }

  return (
    <div>
      <div className={ordersStyles.order__items}>
        {props.orders.map((order: any, index: any) => {
          return (
            <div className={ordersStyles.order} key={'order' + index}>
              <h2>Pedido nº{index + 1}</h2>
              {Object.values(order).map((orderProduct: any, index) => {
                return (
                  <div className={ordersStyles.order__item} key={index}>
                    <img
                      src={props.products[orderProduct.id].ImageUrl}
                      alt=''
                    />
                    <p>{props.products[orderProduct.id].Title}</p>
                    <div className={ordersStyles.price__container}>
                      <p className={ordersStyles.quantity__order}>
                        x{orderProduct.quantity}
                      </p>
                      <h4>{props.products[orderProduct.id].Price}€</h4>
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

Orders.defaultProps = {
  products: {},
  orders: [],
};

export default Orders;
