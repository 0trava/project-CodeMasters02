import React from 'react';
import TaskColumnCard from './TaskColumnCard';

export const ColumnTasksList = ({ tasks }) => {
  return (
    <div className="column-tasks-list">
      {tasks.length > 0 ? (
        tasks.map(task => <TaskColumnCard key={task.id} task={task} />)
      ) : (
        <p>No tasks in this column.</p>
      )}
    </div>
  );
};
