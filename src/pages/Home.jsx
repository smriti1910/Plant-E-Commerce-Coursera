import React from 'react';
import '../Styles/Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Welcome to Siddarthan Plant Store</h1>
                <p>Discover a wide variety of houseplants to brighten your home or office. Our plants are carefully selected to ensure the highest quality and beauty.</p>
                <button onClick={() => window.location.href = '/products'}>Get Started</button>
            </div>
        </div>
    );
}

export default Home;
