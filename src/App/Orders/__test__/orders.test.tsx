import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Orders from '../Orders';

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
    '4': {
      Id: '4',
      Title: 'Estufa de gas para terraza 13000W ',
      Category: 'Jardines y piscinas',
      SubCategory: 'Muebles de jardín y juegos de exterior',
      Manufacturer: 'Estufa',
      Contents: 'Muebles de jardín y juegos de exterior',
      Description: '',
      Organic: true,
      ImageUrl:
        'https://cdn.manomano.com/images/images_products/2665139/P/47316574_1.jpg',
      OrgPrice: 108,
      Price: 108,
    },
  },
  orders: [
    {
      '2': {
        id: '2',
        quantity: 1,
      },
    },
    {
      '4': {
        id: '4',
        quantity: 1,
      },
    },
  ],
};

// test('should render without crashing', () => {
//   render(<Orders {...props} />);
// });

test('should render "No hay pedidos" when there are no products on the cart', () => {
  const customProps = { ...props, orders: [] };
  render(<Orders {...customProps} />);
  expect(screen.getByText(/No hay pedidos/i)).toBeInTheDocument();
});

// test('should render all the orders and their prices', () => {
//   render(<Orders {...props} />);
//   expect(
//     screen.getByRole('heading', { name: /pedido nº1/i })
//   ).toBeInTheDocument();
//   expect(
//     screen.getByRole('heading', { name: /pedido nº2/i })
//   ).toBeInTheDocument();

//   const priceProduct1 = new RegExp(`total ${props.products['2'].Price}€`, 'i');
//   const priceProduct4 = new RegExp(`total ${props.products['4'].Price}€`, 'i');
//   expect(
//     screen.getByRole('heading', { name: priceProduct1 })
//   ).toBeInTheDocument();
//   expect(
//     screen.getByRole('heading', { name: priceProduct4 })
//   ).toBeInTheDocument();
// });
