import { TaskCard } from "../TaskCard/TaskCard";
import './ColumnTasksList.css';
export const ColumnTasksList = (tasks) => {
  //!!!!!!!!!!!!!!!!!!TESTING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
  console.log(tasks);
  
  return (
    <div className="tasksWrapper">
      {/* {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onOpen={onOpen}
          setAction={setAction}
          setColumn={setColumn}
          index={index}
        />
      ))} */}
    </div>
  );
};

