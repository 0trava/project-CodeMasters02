import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonToggle } from './ToggleButton';
import sprite from '../../images/sprite.svg';
import css from './ToggleTheme.module.css';

export const ToggleTheme = () => {
  const [theme, setTheme] = useState(false);
  const dispatch = useDispatch();
  const headElem = document.querySelector('head');
  const elem = headElem.firstElementChild;
  useEffect(() => {
    console.log('Theme - ', theme);
  }, [theme]);

  function handleClick() {
    if (theme === true) {
      setTheme(false);
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#171820';
      elem.href = "/project-CodeMasters02/30893.svg";
    } else {
      setTheme(true);
      document.body.style.backgroundColor = '#171820';
      document.body.style.color = 'white';
      elem.href = "/project-CodeMasters02/2024039.svg";
    }
    dispatch();
  }
  return (
    <ButtonToggle onClick={handleClick}>
      {theme === true ? (
        <svg className={css.icon} width="32" height="32">
          <use href={sprite + '#icon-sun'}></use>
        </svg>
      ) : (
        <svg className={css.icon} width="32" height="32">
          <use href={sprite + '#icon-moon'}></use>
        </svg>
      )}
    </ButtonToggle>
  );
};
