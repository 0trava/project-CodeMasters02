import { useDispatch } from "react-redux";
import { ButtonToggle } from "./ToggleButton";
import sprite from "../../images/sprite.svg";
import css from "./ToggleTheme.module.css";

export const ToggleTheme = () => {
  const dispatch = useDispatch();
  const themeToggle = 'light';
  function handleClick() {
    dispatch();
  }
  return(
    <ButtonToggle onClick={handleClick}>
      {themeToggle === 'light' ?
        <svg className={css.icon} width="32" height="32">
          <use href={sprite + '#icon-sun'}></use>
        </svg>
        :
        <svg className={css.icon} width="32" height="32">
          <use href={sprite + '#icon-moon'}></use>
        </svg>}       
    </ButtonToggle>
  );
}