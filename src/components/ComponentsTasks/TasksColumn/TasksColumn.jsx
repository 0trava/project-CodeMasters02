import React, { useState } from 'react';
import css from './TasksColumn.module.css';

import { ColumnHead } from '../ColumnHead/ColumnHead';
import { ColumnTasksList } from '../ColumnTasksList/ColumnTasksList';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';

const tasksNames = ['To do', 'In progress', 'Done'];

export const TasksColumn = ({tasks, selectedDate}) => {

  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState('edit');

  const [column, setColumn] = useState('');
  const [taskToEdit, setTaskToEdit] = useState({});


  // MODAL WINDOW 
  const openModal = (e) => {
  
    console.log(e);

    setColumn(e);
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
            id = {columnName}
          />

          <ColumnTasksList
            tasks={tasks}

            onOpen={openModal}
            setAction={() => setAction('edit')}
            setColumn={() => setColumn(columnName)}
            onEdit={setTaskToEdit}
            selectedDate={selectedDate}
            column={columnName}
          />

          <AddTaskBtn
            onOpen={() => openModal(columnName)}
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
              column={columnName}
              id= {column}
              taskToEdit={taskToEdit}

            />
          )}
        </div>
      ))}
    </div>
  );
};
