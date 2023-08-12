import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import "./TaskToolbar.css"

export const TaskToolbar = ({
  task,
  moveTaskToGroup,
  openEditModal,
  deleteTask,
}) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const openContextMenu = () => setIsContextMenuOpen(true);
  const closeContextMenu = () => setIsContextMenuOpen(false);

  const handleMoveTask = newGroup => {
    moveTaskToGroup(task.id, newGroup);
    closeContextMenu();
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
    closeContextMenu();
  };

  const contextMenu = (
    <div className="context-menu">
      <ul>
        <li onClick={() => handleMoveTask('to-do')}>To do</li>
        <li onClick={() => handleMoveTask('in-progress')}>In progress</li>
        <li onClick={() => handleMoveTask('done')}>Done</li>
      </ul>
      <button onClick={() => openEditModal(task.id)}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );

  return (
    <div className="task-toolbar">
      <button onClick={openContextMenu}>...</button>
      {isContextMenuOpen && createPortal(contextMenu, document.body)}
    </div>
  );
};
