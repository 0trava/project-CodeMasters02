import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DayCalendarHead from './DayCalendarHead';
import TasksColumn from './TasksColumn';

export const ChoosedDay = () => {
  const { currentDay } = useParams();
  const tasks = useSelector(state => state.tasks);

  const todoTasks = tasks.filter(
    task => task.status === 'To do' && task.date === currentDay
  );
  const inProgressTasks = tasks.filter(
    task => task.status === 'In progress' && task.date === currentDay
  );
  const doneTasks = tasks.filter(
    task => task.status === 'Done' && task.date === currentDay
  );

  return (
    <div className="choosed-day-container">
      <DayCalendarHead selectedDate={currentDay} />
      <TasksColumn
        todoTasks={todoTasks}
        inProgressTasks={inProgressTasks}
        doneTasks={doneTasks}
      />
    </div>
  );
};
