// Ivan Dario Sierra Vega
// Oscar Felipe Segovia Alvarado
// Carlos Mauricio Rios Velasquez

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CatalogPage from './components/CatalogPage';
import AboutUsPage from './components/AboutUsPage';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar cartItemCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/CatalogPage"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
