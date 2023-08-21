import './TaskCard.css';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { EditBtnMenu } from '../EditBtnMenu/EditBtnMenu';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from 'redux/tasks/operation';

import { TaskModal } from 'components/TaskModal/TaskModal';
import { useEffect, useRef, useState } from 'react';
import { TaskDrop } from '../TaskDrop/TaskDrop';

export const TaskCard = ({ task,selectedDate }) => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector(selectUser);
  // Отримання данних
  const { _id, title, start, end, priority, date, category } = task;

  // Перевірка довжини тексту в задачі ( скорочення )
  let shortTitle = title;
  if (shortTitle.length > 35) {
    shortTitle = title.slice(0, 10) + '...';
  }

  // BUTTON DELETE - на видалення.
  const clickDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteTask(_id));

  };

  // BUTTON EDIT - на редагування
  const clickEdit = e => {
    e.preventDefault();
    openModal();
  };

  // BUTTON MOVE - на пересування

  const handleChangeCategory = newCategory => {
    // e.preventDefault();
    const category = newCategory;
    dispatch(editTask({ _id, title, start, end, priority, date, category }));
    setMenuOpening(false);
  };
  const clickMove = e => {
    e.preventDefault();
    setMenuOpening(true);
  };

  const [isMenuOpened, setMenuOpening] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        setMenuOpening(false);
      }
    };
    if (isMenuOpened) {
      window.addEventListener('keydown', onKeyDown);
      document.addEventListener('click', handleClickOutside, true);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isMenuOpened]);

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setMenuOpening(false);
    }
  };

  // MODAL WINDOW-------------------------------
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    // setColumn(e.target.id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // ----------------------------------------------

  return (
    <div className="TaskCard__container">
      <p className="TaskCard__title">{shortTitle}</p>

      <div className="TaskCard__info">
        <div className="TaskCard__block">
          {/* Avatar */}
          <div className="TaskCard__avatar">
            {avatar ? (
              <img src={avatar} alt="reviewImg" key="reviewImg" />
            ) : (
              <p>{name[0]}</p>
            )}
          </div>

          {/* Task Status */}
          {priority === 'low' ? (
            <div className="TaskCard__status-low">
              <p className="TaskCard__status-title">Low</p>
            </div>
          ) : (
            ''
          )}

          {priority === 'medium' ? (
            <div className="TaskCard__status-medium">
              <p className="TaskCard__status-title">Medium</p>
            </div>
          ) : (
            ''
          )}

          {priority === 'high' ? (
            <div className="TaskCard__status-high">
              <p className="TaskCard__status-title">High</p>
            </div>
          ) : (
            ''
          )}
        </div>
        {/* Buttons */}
        <EditBtnMenu
          className="TaskCard__btn"
          clickDelete={clickDelete}
          clickEdit={clickEdit}
          clickMove={clickMove}
        />
      </div>

      {showModal && (
        <TaskModal
          // action={action}
          onClose={closeModal}
          column={''}
          id={''}
          taskToEdit={task}
        />
      )}
      {isMenuOpened && (
        <div className="menuAbsolute" ref={modalRef}>
          <TaskDrop
            category={category}
            handleChangeCategory={handleChangeCategory}
          />
        </div>
      )}
    </div>
  );
};
