import { Navigate } from 'react-router-dom';
import {ROUTES} from '../../utils/routes';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';


// eslint-disable-next-line
export const PrivateRoute = ({children}) => {
    const userIsLogin = useSelector(selectToken);

    


    return (userIsLogin) ?  children : <Navigate to={ROUTES.NotFound} />;
}

