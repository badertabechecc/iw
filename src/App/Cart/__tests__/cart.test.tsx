import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  clearItemsAction,
  startRemoveItemAction,
} from '../../../redux/cart/cart.actions';
import { addOrderAction } from '../../../redux/orders/orders.actions';

import Cart from '../Cart';

const props = {
  products: {
    '1': {
      Id: '1',
      Title: 'Estanterías Modulares Galvanizadas',
      Category: 'Herramientas',
      SubCategory: 'Equipos para organización del taller',
      Manufacturer: 'Pack',
      Contents: 'Equipos para organización del taller',
      Description: '',
      Organic: true,
      ImageUrl:
        'https://cdn.manomano.com/images/images_products/7195930/P/15633022_1.jpg',
      OrgPrice: 59,
      Price: 59,
    },
    '2': {
      Id: '2',
      Title: 'Mini motosierra de mano portátil',
      Category: 'Jardines y piscinas',
      SubCategory: 'Maquinaria de jardín',
      Manufacturer: 'Mini',
      Contents: 'Maquinaria de jardín',
      Description: '',
      Organic: true,
      ImageUrl:
        'https://cdn.manomano.com/images/images_products/513505/P/36983634_1.jpg',
      OrgPrice: 74,
      Price: 74,
    },
  },
  cartItems: {},
  removeItem: startRemoveItemAction,
  addOrder: addOrderAction,
  clearCart: clearItemsAction,
};
test('should render without crashing', () => {
  render(<Cart {...props} />);
});

test('should render "No hay productos en el carrito" when there are no products on the cart', () => {
  render(<Cart {...props} />);
  expect(
    screen.getByText(/No hay productos en el carrito/i)
  ).toBeInTheDocument();
});
