import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import error_rocket from '../../images/error_rocket.png';
import '../NotFound/NotFound.css';
import { ROUTES } from 'utils/routes';

export const NotFound = () => {

  const { isAuthenticated } = useState(false); //state.auth.user

  const navigate = useNavigate();

  // eslint-disable-next-line
  
  const handleBackToHome = () => {
    if (isAuthenticated) {
      navigate(ROUTES.HOME);
    } else {
      navigate(ROUTES.START);
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
