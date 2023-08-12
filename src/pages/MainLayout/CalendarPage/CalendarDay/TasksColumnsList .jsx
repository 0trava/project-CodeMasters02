import React from 'react';
import {TasksColumn} from './TasksColumn';

export const TasksColumnsList = ({ columns }) => {
  return (
    <div className="tasks-columns-list">
      {columns.map(column => (
        <TasksColumn key={column.id} column={column} />
      ))}
    </div>
  );
};
