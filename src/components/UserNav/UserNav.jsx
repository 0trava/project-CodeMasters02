import { Link } from 'react-router-dom';
import sprite from 'images/sprite.svg';
import css from './UserNav.module.css';
import { ROUTES } from 'utils/routes';

export const UserNav = () => {
  return (
    <ul className={css.list}>
      <li className={css.text_block}>
        <span className={css.text}>User Panel</span>
      </li>
      <li>
        <Link className={css.item} to={ROUTES.ACCOUNT}>
          <svg className={css.icon} width="24" height="24">
            <use href={sprite + '#icon-user-check'}></use>
          </svg>
          <span className={css.link}>My Account</span>
        </Link>
      </li>
     <li>
        <Link className={css.item} to={ROUTES.CALENDAR}>
          <svg className={css.icon} width="24" height="24">
            <use href={sprite + '#icon-calendar-check'}></use>
          </svg>
          <span className={css.link}>Calendar</span>
        </Link>
     </li>
     <li>
        <Link className={css.item} to={ROUTES.STATISTICS}>
          <svg className={css.icon_2} width="24" height="24">
            <use href={sprite + '#icon-statistics'}></use>
          </svg>
          <span className={css.link}>Statistics</span>
        </Link>
     </li>
    </ul>
  );
};
