import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const TaskModal = ({ isOpen, onClose, onSave, taskData = { priority: 'low' } }) => {
  const [title, setTitle] = useState(taskData.title || '');
  const [description, setDescription] = useState(taskData.description || '');
  const [priority, setPriority] = useState(taskData.priority);

  const handleSave = () => {
    onSave({ title, description, priority });
  };

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="task-modal-overlay">
      <div className="task-modal">
        <h2>{taskData.id ? 'Edit Task' : 'Create Task'}</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <div className="task-modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};
