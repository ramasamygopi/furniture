import React, { useState } from 'react'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} successfully added to cart!`);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="product" element={<Product addToCart={addToCart} />} />
          <Route path="login" element={<Login/>} />
          <Route path="cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
