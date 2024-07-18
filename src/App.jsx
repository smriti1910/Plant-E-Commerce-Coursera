import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';
import './Styles/App.css';

function App() {
    const [cart, setCart] = useState([]);

    return (
        <Router>
            <div className="app">
                <div className="header">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/products" className="link">Products</Link>
                    <Link to="/cart" className="link">Cart ({cart.length})</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductListing cart={cart} setCart={setCart} />} />
                    <Route path="/cart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
                </Routes>
                <footer className="footer">
                    <p className="footer2">© 2024 Siddarthan. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
