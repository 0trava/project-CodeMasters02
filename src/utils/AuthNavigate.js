import React from 'react';
import { Link } from 'react-router-dom';

export const Navigate = ({ route, text }) => {
  return (
    <Link to={route} className="auth-navigate">
      {text}
    </Link>
  );
};

export const AuthNavigate  = () => {
  return (
    <div>
      <Navigate route="/login" text="Login" />
      <Navigate route="/register" text="Register" />
    </div>
  );
};

