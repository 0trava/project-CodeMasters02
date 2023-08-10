import React from 'react';
import ReactDOM from 'react-dom';
import AddTaskModal from './AddTaskModal';

export const ColumnHeadBar = ({ title, status }) => {
  const [showModal, setShowModal] = React.useState(false);

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
          <AddTaskModal closeModal={closeModal} status={status} />,
          document.getElementById('modal-root')
        )}
    </div>
  );
};
