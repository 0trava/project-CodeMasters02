import { Link } from 'react-router-dom';
import css from './AuthNavigate.module.css';


export default function AuthNavigate({ route, pageName }) {
    return (
        <button type="button" className={css.button}>
            <Link to={route}>{pageName}</Link>
        </button>
    )
}