import { TasksColumn } from '../TasksColumn/TasksColumn';
import './TasksColumnsSchedule.css';
export const TasksColumnsSchedule = ({ tasks }) => {
  return (
    <div className="tasksColumns">
      <TasksColumn tasks={tasks} />
    </div>
  );
};


