import './TaskDrop.css';
import '../EditBtnMenu/EditBtnMenu.css';
import { BsBoxArrowRight } from 'react-icons/bs';

export const TaskDrop = ({ category, handleChangeCategory }) => {
  return (
    <div className="TaskDrop__container">
      {category === 'to-do' && (
        <>
          <button
            className="TaskDrop_item"
            onClick={() => handleChangeCategory('in-progress')}
          >
            In progress
            <BsBoxArrowRight className="TaskDrop_icon" />
          </button>
          <button
            className="TaskDrop_item"
            onClick={() => handleChangeCategory('done')}
          >
            Done
            <BsBoxArrowRight className="TaskDrop_icon" />
          </button>
        </>
      )}
      {category === 'in-progress' && (
        <>
          <button
            className="TaskDrop_item"
            onClick={() => handleChangeCategory('to-do')}
          >
            To do
            <BsBoxArrowRight className="TaskDrop_icon" />
          </button>
          <button
            className="TaskDrop_item"
            onClick={() => handleChangeCategory('done')}
          >
            Done
            <BsBoxArrowRight className="TaskDrop_icon" />
          </button>
        </>
      )}
      {category === 'done' && (
        <>
          <button
            className="TaskDrop_item"
            onClick={() => handleChangeCategory('to-do')}
          >
            To do
            <BsBoxArrowRight className="TaskDrop_icon" />
          </button>
          <button
            className="TaskDrop_item"
            onClick={() => handleChangeCategory('in-progress')}
          >
            In progress
            <BsBoxArrowRight className="TaskDrop_icon" />
          </button>
        </>
      )}
    </div>
  );
};
