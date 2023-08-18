import { TaskCard } from "../TaskCard/TaskCard";

export const ColumnTasksList = ({
  
  onOpen,
  setAction,
  setColumn,
 
}) => {
const testTasks = [
  [
    {
      title: 'Complete project proposal',
      start: '09:00',
      end: '10:30',
      priority: 'high',
      date: '2023-08-10',
      category: 'to-do',
    },
    {
      title: 'Review client feedback',
      start: '11:00',
      end: '12:00',
      priority: 'medium',
      date: '2023-08-11',
      category: 'in-progress',
    },
    {
      title: 'Prepare presentation slides',
      start: '14:00',
      end: '15:30',
      priority: 'medium',
      date: '2023-08-10',
      category: 'in-progress',
    },
    {
      title: 'Send progress report to team',
      start: '16:00',
      end: '16:30',
      priority: 'low',
      date: '2023-08-09',
      category: 'done',
    },

    {
      title: 'Update website content',
      start: '10:00',
      end: '11:30',
      priority: 'medium',
      date: '2023-08-10',
      category: 'in-progress',
    },
    {
      title: 'Attend team meeting',
      start: '15:00',
      end: '16:00',
      priority: 'high',
      date: '2023-08-11',
      category: 'to-do',
    },
    {
      title: 'Test new feature',
      start: '13:30',
      end: '14:30',
      priority: 'medium',
      date: '2023-08-09',
      category: 'in-progress',
    },
    {
      title: 'Write monthly report',
      start: '17:00',
      end: '18:30',
      priority: 'low',
      date: '2023-08-12',
      category: 'to-do',
    },
    {
      title: 'Client follow-up',
      start: '09:30',
      end: '10:00',
      priority: 'high',
      date: '2023-08-09',
      category: 'done',
    },
    {
      title: 'Review code changes',
      start: '14:30',
      end: '15:00',
      priority: 'medium',
      date: '2023-08-12',
      category: 'to-do',
    },
  ],
];
 
  return (
    <div className="tasksWrapper">
      {testTasks.map((task, index) => (
        <TaskCard
          key={index}
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

