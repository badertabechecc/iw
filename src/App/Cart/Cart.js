import './Cart.css';

const Cart = (props) => {
  const handleRemoveItem = (id) => {
    props.removeItem({ id });
  };

  const handleAddOrder = () => {
    props.addOrder({ orders: props.state });
    props.clearCart();
  };

  const getTotalPrice = () => {
    return Object.values(props.state).reduce((acc, item) => {
      const price = item.item.Price;
      const quantity = item.quantity;
      return acc + price * quantity;
    }, 0);
  };

  if (Object.keys(props.state).length === 0) {
    return <div className='cart__footer'>No hay productos en el carrito</div>;
  }
  return (
    <div className='a'>
      <div className='cart__items'>
        {Object.values(props.state).map((item, index) => {
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
        <button onClick={() => handleAddOrder()}>Confirmar Pedido</button>
      </div>
    </div>
  );
};

export default Cart;
