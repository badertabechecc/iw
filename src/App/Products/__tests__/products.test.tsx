import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Products from '../Products';

import { addProductsAction } from '../../../redux/products/products.actions';

const props = {
  products: {
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
  addItem: addProductsAction,
};

test('should render without crashing', () => {
  render(<Products {...props} />);
});

test('should add products to the cart', () => {
  render(<Products {...props} />);
  const add = screen.getByRole('button', { name: /añadir al carrito/i });
  userEvent.click(add);
});
