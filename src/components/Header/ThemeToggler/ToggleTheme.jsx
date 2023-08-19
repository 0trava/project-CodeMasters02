// import React, { useState } from 'react';
import { useTheme } from "../../hooks/use-theme";
import { ButtonToggle } from "./ToggleButton";
import sprite from "../../../images/sprite.svg";
import css from "./ToggleTheme.module.css";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  function handleClick() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ButtonToggle onClick={handleClick}>
      {theme === "light" ? (
        <svg className={css.icon} width="32" height="32">
          <use href={sprite + "#icon-sun"}></use>
        </svg>
      ) : (
        <svg className={css.icon} width="32" height="32">
          <use href={sprite + "#icon-moon"}></use>
        </svg>
      )}
    </ButtonToggle>
  );
};
