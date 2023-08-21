import React, { useState } from 'react';
import css from './TasksColumn.module.css';

import { ColumnHead } from '../ColumnHead/ColumnHead';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';

const tasksNames = ['To do', 'In progress', 'Done'];

export const TasksColumn = ({tasks}) => {
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('edit');
  // eslint-disable-next-line
  const [column, setColumn] = useState('To do');
  const [taskToEdit, setTaskToEdit] = useState({});

  const openModal = (e) => {
    setColumn(e.target.id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={css.tasksColumnWrapper}>
      {tasksNames.map(columnName => (
      <div className={css.taskItem} key={columnName}>
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
            column = {columnName}
            id = {columnName}
            onclick={() => {setColumn(columnName)}}
          />

          {showModal && (
            <TaskModal
              action={action}
              onClose={closeModal}
              column={column}
              id= {column}
              taskToEdit={taskToEdit}
            />
          )}
        </div>
      ))}
    </div>
  );
};
