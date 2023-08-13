import css from './Header.module.css';
import sprite from '../../images/sprite.svg';
import { useLocation } from 'react-router-dom';
import { ThemeTogglerBtn } from 'components/Header/ThemeTogglerBtn/ThemeTogglerBtn';
import { FeedbackBtn } from 'components/Header/FeedbackBtn/FeedbackBtn';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  let title = '';
  if (currentPath.startsWith('/account')) {
    title = 'User Profile';
  } else if (currentPath.startsWith('/calendar')) {
    title = 'Calendar';
  } else if (currentPath.startsWith('/statistics')) {
    title = 'Statistics';
  } else {
    title = '';
  }

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>{title}</h1>
      <button type="button" className={css.btn}>
        <svg className={css.menuBurger}>
          <use href={`${sprite}#icon-burger`} />
        </svg>
      </button>
      <div className={css.infoWrapper}>
        <FeedbackBtn />
        <ThemeTogglerBtn />
        <UserInfo />
      </div>
    </div>
  );
};
