import { TaskCard } from '../ТaskCard/ТaskCard';
export const ColumnTasksList = ({
  tasks,
  onOpen,
  setAction,
  setColumn,
 
}) => {
  return (
    <div className="tasksWrapper">
      {tasks.map((task, index) => (
        <TaskCard
          key={task._id}
          task={task}
          onOpen={onOpen}
          setAction={setAction}
          setColumn={setColumn}
          index={index}
        />
      ))}
    </div>
  );
};

