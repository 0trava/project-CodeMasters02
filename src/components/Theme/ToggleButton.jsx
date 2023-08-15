import css from "./ToggleTheme.module.css";

export const ButtonToggle = ({ onClick, children }) => {
  return (
    <button type="button" className={css.btn} onClick={onClick}>{children}</button>
  );
}