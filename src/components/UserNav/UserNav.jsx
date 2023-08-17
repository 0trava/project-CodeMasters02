import { Link } from 'react-router-dom';
import sprite from 'images/sprite.svg';
import css from './UserNav.module.css';
import { ROUTES } from 'utils/routes';

export const UserNav = ({ setShowSideBar }) => {
  return (
    <>
      <p className={css.text}>User Panel</p>
      <ul className={css.list}>
        <li onClick={setShowSideBar}>
          <Link className={css.item} to={ROUTES.ACCOUNT}>
            <svg className={css.icon} width="24" height="24">
              <use href={sprite + '#icon-user-check'}></use>
            </svg>
            <span className={css.link}>My Account</span>
          </Link>
        </li>
        <li onClick={setShowSideBar}>
          <Link className={css.item} to={ROUTES.CALENDAR}>
            <svg className={css.icon} width="24" height="24">
              <use href={sprite + '#icon-calendar-check'}></use>
            </svg>
            <span className={css.link}>Calendar</span>
          </Link>
        </li>
        <li onClick={setShowSideBar}>
          <Link className={css.item} to={ROUTES.STATISTICS}>
            <svg className={css.icon_2} width="24" height="24">
              <use href={sprite + '#icon-statistics'}></use>
            </svg>
            <span className={css.link}>Statistics</span>
          </Link>
        </li>
      </ul>
    </>
  );
};
