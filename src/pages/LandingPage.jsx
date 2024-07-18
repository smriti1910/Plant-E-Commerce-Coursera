import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Houseplant Haven</h1>
        <p>Welcome to Houseplant Haven, your go-to place for the best houseplants.</p>
        <Link to="/products">
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
