import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { TaskModal } from './TaskModal ';

export const ColumnHeadBar = ({ title, status }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="column-head-bar">
      <h2>{title}</h2>
      <button onClick={openModal}>Add Task</button>
      {showModal &&
        ReactDOM.createPortal(
          <TaskModal closeModal={closeModal} status={status} />,
          document.getElementById('modal-root')
        )}
    </div>
  );
};
