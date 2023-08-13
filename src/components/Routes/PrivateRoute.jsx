import { Navigate } from 'react-router-dom';
import {ROUTES} from '../../utils/routes';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';


export const PrivateRoute = ({children}) => {
    const userIsLogin = useSelector(selectToken);
    console.log(userIsLogin);

    return (userIsLogin === 'true') ?  children : <Navigate to={ROUTES.NotFound} />;
}

