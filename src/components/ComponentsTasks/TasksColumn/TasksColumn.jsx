import React, { useState } from 'react';
import './TasksColumn.css';

import { ColumnHead } from '../ColumnHead/ColumnHead';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
// import { editTask } from 'redux/tasks/operations';
// import { useDispatch } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';

const tasksNames = ['To do', 'In progress', 'Done'];

export const TasksColumn = ({tasks}) => {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('edit');
  const [column, setColumn] = useState('To do');
  const [taskToEdit, setTaskToEdit] = useState({});

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="tasksColumnWrapper">
      {tasksNames.map(columnName => (
        <div className="taskItem" key={columnName}>
          <ColumnHead
            taskName={columnName}
            onOpen={openModal}
            setAction={() => setAction('add')}
            setColumn={() => setColumn(columnName)}
          />

          <ColumnTasksList
            tasks={tasks}
            onOpen={openModal}
            setAction={() => setAction('edit')}
            setColumn={() => setColumn(columnName)}
            onEdit={setTaskToEdit}
            column={columnName}
          />

          <AddTaskBtn
            onOpen={openModal}
            setAction={() => setAction('add')}
            setColumn={() => setColumn(columnName)}
          />

          {showModal && (
            <TaskModal
              action={action}
              onClose={closeModal}
              column={column}
              taskToEdit={taskToEdit}
            />
          )}
        </div>
      ))}
    </div>
  );
};
