import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import './HeaderWork.css';
import {ROUTES} from '../../utils/routes';



export const HeaderWork = () => {
    // eslint-disable-next-line
    const navigate = useNavigate();
  return ( 
    <nav className='HeaderWork'>
        <Link to={ROUTES.START}>Start</Link>
        <Link to={ROUTES.LOGIN}>Login</Link>
        <Link to={ROUTES.REGISTER}>Register</Link>
        <Link to={ROUTES.HOME}>HOME</Link>
        <Link to={ROUTES.NotFound}>NotFound</Link>
   </nav>
  )
}
