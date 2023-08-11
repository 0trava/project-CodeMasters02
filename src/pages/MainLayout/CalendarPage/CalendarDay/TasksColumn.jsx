import React from 'react';
import ColumnHeadBar from './ColumnHeadBar';
import ColumnTasksList from './ColumnTasksList';
import AddTaskBtn from '../AddTaskBtn';

export const TasksColumn = ({ title, tasks }) => {
  return (
    <div className="tasks-column">
      <ColumnHeadBar title={title} />
      <ColumnTasksList tasks={tasks} />
      <AddTaskBtn />
    </div>
  );
};
