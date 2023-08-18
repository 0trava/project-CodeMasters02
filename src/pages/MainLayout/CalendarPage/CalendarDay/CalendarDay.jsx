import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DayCalendarHead from './DayCalendarHead';
import TasksColumnsList from './TasksColumnsList';

const DayCalendarPage = () => {
  const { currentDay } = useParams(); 
  const tasks = useSelector(state => state.tasks); 

  
  const tasksForCurrentDay = tasks.filter(task => task.date === currentDay);

  return (
    <div className="day-calendar-page">
      <DayCalendarHead currentDay={currentDay} />
      <TasksColumnsList tasks={tasksForCurrentDay} />
    </div>
  );
};

export default DayCalendarPage;
