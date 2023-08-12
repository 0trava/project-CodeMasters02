import React from 'react';
import {TaskToolbar} from './TaskToolbar';
import {TaskModal} from './TaskModal ';

export const TaskColumnCard = ({ task, avatar }) => {
  return (
    <div className="task-column-card">
      <div className="task-info">
        <p className="task-description">{task.description}</p>
        <img src={avatar} alt="User Avatar" className="user-avatar" />
        <div className={`priority-badge ${task.priority}`}>{task.priority}</div>
      </div>
      <TaskToolbar taskId={task.id} />
      <TaskModal taskId={task.id} />
    </div>
  );
};
