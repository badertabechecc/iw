import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

import NavBar from '../NavBar';

const props = {
  cartItems: {
    '1': {
      id: '1',
      quantity: 2,
    },
    '2': {
      id: '2',
      quantity: 1,
    },
  },
};

test('should render without crashing', () => {
  render(
    <BrowserRouter>
      <NavBar {...props} />
      <Routes>
        <Route path='/' element={<div>products</div>} />
        <Route path='/cart' element={<div>cart</div>} />
        <Route path='/orders' element={<div>pedidos</div>} />
        <Route path='*' />
      </Routes>
    </BrowserRouter>
  );
});

test('the links should work correctly', () => {
  render(
    <MemoryRouter>
      <NavBar {...props} />
      <Routes>
        <Route path='/' element={<div>/</div>} />
        <Route path='/cart' element={<div>cart</div>} />
        <Route path='/orders' element={<div>orders</div>} />
        <Route path='*' />
      </Routes>
    </MemoryRouter>
  );

  const ordersLink = screen.getByRole('button', { name: /mis pedidos/i });
  userEvent.click(ordersLink);
  expect(screen.getByText(/orders/i)).toBeInTheDocument();

  const cartLink = screen.getByRole('button', { name: /3/i });
  userEvent.click(cartLink);
  expect(screen.getByText(/cart/i)).toBeInTheDocument();

  const productsLink = screen.getByRole('button', { name: /productos/i });
  userEvent.click(productsLink);
  expect(screen.getByText(/\//i)).toBeInTheDocument();
});
