import css from './AddTaskBtn.module.css';
import sprite from '../../../images/sprite.svg';
export const AddTaskBtn = ({ onOpen }) => {
  return (
    <button type="button" className={css.taskBtn} onClick={onOpen}>
      <svg className={css.iconPlus}>
        <use href={`${sprite}#icon-plus-square`} />
      </svg>
      Add Task
    </button>
  );
};
