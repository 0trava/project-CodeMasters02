import sprite from '../../images/sprite.svg'
import css from './LogoutBtn.module.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { ROUTES } from "utils/routes";
import { logout } from "redux/auth/operations";

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      navigate(ROUTES.HOME);
      dispatch(logout());
  }


  return (
    <button className={css.btn} type="button" onClick={handleSubmit}>
      Log out
        <svg className={css.icon}>
          <use href={sprite + '#icon-log-out-01'}></use>
        </svg>
    </button>
  );
};
