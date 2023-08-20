import { TaskForm } from 'components/TaskForm/TaskForm';
import { Modal } from '../Modal/Modal';

export const TaskModal =({ onClose, action, column, taskToEdit, id })=> {
  return (
    <Modal onClose={onClose}>
      <TaskForm
        onClose={onClose}
        action={action}
        column={column}
        taskToEdit={taskToEdit}
        id={id}
      />
    </Modal>
  );
};

