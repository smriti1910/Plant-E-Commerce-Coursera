import React from 'react';
import '../Styles/ShoppingCart.css';

function ShoppingCart({ cart, setCart }) {
    const totalItems = cart.length;
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const removeFromCart = (index) => {
        const newCart = cart.filter((_, i) => i !== index);
        setCart(newCart);
    };

    return (
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={() => alert('Purchased Successfully')}>Checkout</button>
            <button onClick={() => window.location.href = '/'}>Continue Shopping</button>
            <div className="cart-items">
                {cart.map((product, index) => (
                    <div key={index} className="cart-item">
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShoppingCart;
