import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import error_rocket from '../../images/error_rocket.png';
import '../NotFound/NotFound.css';

export const NotFound = () => {
  const {isAuthenticated} = useState(false);

  const navigate = useNavigate();

  const handleBackToHome = () => {
    if (isAuthenticated) {
      navigate('/MainLayout');
    } else {
      navigate('/MainPage');
    }
  };

  return (
    <div className="not-found">
      <h1 className="not-found-heading">
        <span>4</span>
        <img src={error_rocket} alt="Error Rocket" className="error-rocket" />
        <span>4</span>
      </h1>
      <p className="not-found-message">
        We're sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <button
        type="button"
        id="back-to-home-button"
        class="back-to-home-button"
        onClick={handleBackToHome}
      >
        Back to home
      </button>
    </div>
  );
};
