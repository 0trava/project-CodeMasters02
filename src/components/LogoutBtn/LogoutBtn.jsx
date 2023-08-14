import sprite from "images/sprite.svg";
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
      dispatch(logout());
      navigate(ROUTES.HOME);

  }


  return (
    <button className={css.btn} type="button" onClick={handleSubmit}>
      <span className={css.btn_text}>Log out</span>
      <svg className={css.icon} style={{ cursor: 'pointer' }} width="24" height="24">
          <use href={sprite + '#icon-log-out-01'}></use>
        </svg>
    </button>
  );
};
