import React, { useState } from 'react';
import '../Styles/ProductListing.css';

const products = [
    { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulents' },
    { id: 2, name: 'Snake Plant', price: 15, category: 'Succulents' },
    { id: 3, name: 'Fiddle Leaf Fig', price: 20, category: 'Trees' },
    { id: 4, name: 'Peace Lily', price: 25, category: 'Flowers' },
    { id: 5, name: 'Orchid', price: 30, category: 'Flowers' },
    { id: 6, name: 'Bamboo Palm', price: 35, category: 'Trees' }
];

function ProductListing({ cart, setCart }) {
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="product-listing">
            <h1>Our Products</h1>
            {['Succulents', 'Trees', 'Flowers'].map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <div className="product-category">
                        {products.filter(p => p.category === category).map(product => (
                            <div key={product.id} className="product-card">
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price}</p>
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductListing;
