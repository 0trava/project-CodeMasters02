import sprite from '../../../images/sprite.svg';
import css from './ThemeTogglerBtn.module.css';

export const ThemeTogglerBtn = () => {
  return (
    <button type="button" className={css.btn}>
      <svg className={css.icon}>
        <use href={`${sprite}#icon-sun`} />
      </svg>
    </button>
  );
};
