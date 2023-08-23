import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonToggle } from './ToggleButton';
import sprite from '../../images/sprite.svg';
import css from './ToggleTheme.module.css';

export const ToggleTheme = () => {

  const [ theme, setTheme ] = useState(false);
  const dispatch = useDispatch();
  
  const headElem = document.querySelector('head');
  const linkElem = headElem.firstElementChild;
  const lightFaviconPatch = '/project-CodeMasters02/favicon.png';
  const darkFaviconPatch = '/project-CodeMasters02/favicon_dark.svg';

  useEffect(() => {
    console.log('Theme - ', theme);
    function updateFavicon(themeDarkLight) {
      if (themeDarkLight.matches) {
        linkElem.href = darkFaviconPatch;
      }
      else {
        linkElem.href = lightFaviconPatch;
      }
    }
    const themeObj = window.matchMedia("(prefers-color-scheme: dark)");
    updateFavicon(themeObj);
    themeObj.addListener(updateFavicon);

  }, [theme]);
  function handleClick() {

    // LIGHT
    if (theme === true) {
      setTheme(false);
      document.documentElement.setAttribute('data-theme', "light")

    }
    // DADK
    else {
      setTheme(true);
      document.documentElement.setAttribute('data-theme', "dark")

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
        <>
        <svg className={css.icon} width="32" height="32">
          <use href={sprite + '#icon-moon'}></use>
        </svg>
        </>
      )}
    </ButtonToggle>
  );
};
