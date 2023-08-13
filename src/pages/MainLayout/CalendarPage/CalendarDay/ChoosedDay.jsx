import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { DayCalendarHead } from './DayCalendarHead';
import { TasksColumnsList } from './TasksColumnsList ';
import './ChoosedDay.css';

export const ChoosedDay = () => {
  const { selectedDate } = useParams();
  const tasks = useSelector(state => state.tasks);

  const todoTasks = tasks.filter(
    task => task.status === 'To do' && task.date === selectedDate
  );
  const inProgressTasks = tasks.filter(
    task => task.status === 'In progress' && task.date === selectedDate
  );
  const doneTasks = tasks.filter(
    task => task.status === 'Done' && task.date === selectedDate
  );

  return (
    <div className="choosed-day-container">
      <DayCalendarHead selectedDate={selectedDate} />
      <TasksColumnsList
        todoTasks={todoTasks}
        inProgressTasks={inProgressTasks}
        doneTasks={doneTasks}
      />
    </div>
  );
};
