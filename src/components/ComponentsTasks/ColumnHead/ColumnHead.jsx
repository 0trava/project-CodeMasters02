import './ColumnHead.css';
import sprite from '../../../images/sprite.svg';
export const ColumnHead = ({ taskName, onOpen, setAction, setColumn }) => {
  return (
    <div className="columnHeadWrapper">
      <p className="taskTitle">{taskName}</p>
      <button
        type="button"
        className="taskHeaderBtn"
        onClick={() => {
          onOpen();
          setAction();
          setColumn();
        }}
      >
        <svg className="taskHeaderIcon">
          <use href={`${sprite}#icon-plus`} />
        </svg>
      </button>
    </div>
  );
};
