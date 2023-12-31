import css from './AddTaskBtn.module.css';
import sprite from '../../../images/sprite.svg';
export const AddTaskBtn = ({ onOpen, column }) => {
  return (
    <button type="button" 
    className={css.taskBtn} 
    onClick={onOpen}
    id={column}>
      <svg className={css.iconPlus}>
        <use href={`${sprite}#icon-plus-square`} />
      </svg>
      Add Task
    </button>
  );
};
