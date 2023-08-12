import { Navigate } from 'react-router-dom';
import {ROUTES} from '../../utils/routes';

export const PrivateRoute = ({children}) => {
    const userIsLogin = 'false';
    console.log(children);

    return (userIsLogin === 'true') ?  children : <Navigate to={ROUTES.NotFound} />;
}

