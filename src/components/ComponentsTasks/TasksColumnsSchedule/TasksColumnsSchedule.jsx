import { TasksColumn } from '../TasksColumn/TasksColumn';
import './TasksColumnsSchedule.css';
export const TasksColumnsSchedule = ({ tasks, selectedDate }) => {
  return (
    <div className="tasksColumns">
      <TasksColumn tasks={tasks} selectedDate={selectedDate}/>
    </div>
  );
};


