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
    return props.state.reduce((acc, item) => {
      return acc + item.Price;
    }, 0);
  };

  if (props.state.length === 0) {
    return <div className='cart__footer'>No hay productos en el carrito</div>;
  }
  return (
    <div className='a'>
      <div className='cart__items'>
        {props.state.map((item, index) => {
          return (
            <div className='cart__item' key={index}>
              <img src={item.ImageUrl} alt='' />
              <p>{item.Title}</p>
              <h4>{item.Price}€</h4>
              <button onClick={() => handleRemoveItem(item.Id)}>X</button>
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
