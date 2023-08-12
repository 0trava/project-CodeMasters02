import { Link } from 'react-router-dom';
import sprite from "images/sprite.svg";
import css from './UserNav.module.css';
import { ROUTES } from 'utils/routes';

export const UserNav = () => {
  return (
    <ul className={css.list}>
      <li className={css.text_block}>
        <svg className={css.menu_icon} width="24" height="24">
          <use href={sprite + '#icon-burger'}></use>
        </svg>
        <span className={css.text}>User Panel</span>
      </li>
      <li className={css.item}>
        <svg className={css.icon} width="24" height="24">
          <use href={sprite + '#icon-user-check'}></use>
        </svg>
        <Link className={css.link} to={ROUTES.ACCOUNT}>
          My Account
        </Link>
      </li>
      <li className={css.item}>
        <svg className={css.icon} width="24" height="24">
          <use href={sprite + '#icon-calendar-check'}></use>
        </svg>
        <Link className={css.link} to={ROUTES.CALENDAR}>
          Calendar
        </Link>
      </li>
      <li className={css.item}>
        <svg className={css.icon_2} width="24" height="24">
          <use href={sprite + '#icon-statistics'}></use>
        </svg>
        <Link className={css.link} to={ROUTES.STATISTICS}>
          Statistics
        </Link>
      </li>
    </ul>
  );
};
