import { Link } from 'react-router-dom';
import css from './AuthNavigate.module.css';


export default function AuthNavigate({ route, pageName }) {
    return (
      
        <Link className={css.button}  to={route}>
          {pageName}
        </Link>
      
    );
}