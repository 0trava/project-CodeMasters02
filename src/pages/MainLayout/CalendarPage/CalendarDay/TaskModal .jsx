import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './TaskModal.css';

export const TaskModal = ({
  isOpen,
  onClose,
  onSave,
  taskData = { priority: 'low' },
}) => {
  const [title, setTitle] = useState(taskData.title || '');
  const [description, setDescription] = useState(taskData.description || '');
  const [priority, setPriority] = useState(taskData.priority);

  const handleSave = async () => {
    try {
      const response = await fetch(`${process.env.base_url}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          priority,
        }),
      });

      if (response.ok) {
        onSave({ title, description, priority });
      } else {
        console.error('Error saving task:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="task-modal-overlay">
      <div className="task-modal">
        <h2>{taskData.id ? 'Edit Task' : 'Create Task'}</h2>
        <form>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <select value={priority} onChange={e => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <div className="task-modal-buttons">
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};
