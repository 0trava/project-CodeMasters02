import css from './Header.module.css';
import sprite from '../../images/sprite.svg';
import { useLocation } from 'react-router-dom';
import { ThemeTogglerBtn } from 'components/ThemeTogglerBtn/ThemeTogglerBtn';
import { FeedbackBtn } from 'components/FeedbackBtn/FeedbackBtn';
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
    <div>
      <h1>{title}</h1>
      <button type="button">
        <svg>
          <use href={`${sprite}#icon-burger`} />
        </svg>
      </button>
      <FeedbackBtn />
      <ThemeTogglerBtn />
    </div>
  );
};
