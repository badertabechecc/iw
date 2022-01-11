import './orders.css';

const Orders = (props) => {
  if (props.state.length === 0) {
    return <div>There are no orders</div>;
  }
  return (
    <div className='grid'>
      <div className='order__items'>
        {props.state.map((order, index) => {
          return (
            <div className='order'>
              <h2>Order nº{index + 1}</h2>
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
