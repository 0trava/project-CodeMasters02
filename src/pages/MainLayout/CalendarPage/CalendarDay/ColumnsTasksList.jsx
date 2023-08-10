import React from 'react';
import TaskColumnCard from './TaskColumnCard';

export const ColumnsTasksList = ({ tasks }) => {
  return (
    <div className="columns-tasks-list">
      {tasks.map(task => (
        <TaskColumnCard key={task.id} task={task} />
      ))}
    </div>
  );
};
