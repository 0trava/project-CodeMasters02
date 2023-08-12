import sprite from "images/sprite.svg";
import css from './LogoutBtn.module.css';

export const LogoutBtn = () => {
  return (
    <button className={css.btn} type="primary" onClick={() => {}}>
      <span className={css.btn_text}>Log out</span>
      <svg className={css.icon} style={{ cursor: 'pointer' }} width="24" height="24">
          <use href={sprite + '#icon-log-out-01'}></use>
        </svg>
    </button>
  );
};
