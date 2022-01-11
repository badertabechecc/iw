import NavBar from '../components/NavBar';
import Products from './Products';
import Cart from './Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './Orders/Orders';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Products />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/orders' element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
