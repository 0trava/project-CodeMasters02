import { Link, useLocation } from 'react-router-dom';
import sprite from 'images/sprite.svg';
import css from './UserNav.module.css';
import { ROUTES } from 'utils/routes';

export const UserNav = ({ setShowSideBar }) => {
  const location = useLocation();


// Перевірка яка сторінка відкрита
const chackPage = (page) => {
  const open = location.pathname.slice(0, 11)
  console.log(open)
  if ( open === page)  {
     console.log(location.pathname)
     return css.button_active;
  } else {
    return css.button;
  }
}





  return (
    <>
      <p className={css.text}>User Panel</p>
      <div className={css.list}>
        <button className={chackPage("/account")} onClick={setShowSideBar} id="/account">
          <Link className={css.item} to={ROUTES.ACCOUNT}>
            <svg className={css.icon}>
              <use href={sprite + '#icon-user-check'}></use>
            </svg>
            <span className={css.link}>My Account</span>
          </Link>
        </button>
        <button className={chackPage("/calendar/m")} onClick={setShowSideBar}>
          <Link className={css.item} to={ROUTES.CALENDAR}>
            <svg className={css.icon}>
              <use href={sprite + '#icon-calendar-check'}></use>
            </svg>
            <span className={css.link}>Calendar</span>
          </Link>
        </button>
        <button className={chackPage("/statistics")}onClick={setShowSideBar}>
          <Link className={css.item} to={ROUTES.STATISTICS}>
            <svg className={css.icon_2}>
              <use href={sprite + '#icon-statistics'}></use>
            </svg>
            <span className={css.link}>Statistics</span>
          </Link>
        </button>
      </div>
    </>
  );
};
