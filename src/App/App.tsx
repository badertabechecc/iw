import NavBar from "../components/NavBar";
import Products from "./Products";
import Cart from "./Cart";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./Orders";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
