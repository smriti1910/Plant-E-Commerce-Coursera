import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header({ cart }) {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </div>
  );
}

export default Header;
