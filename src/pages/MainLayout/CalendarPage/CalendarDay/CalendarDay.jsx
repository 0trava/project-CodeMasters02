import React from 'react';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { TaskCard } from 'components/ComponentsTasks/TaskCard/TaskCard';
import { TaskDrop } from 'components/ComponentsTasks/TaskDrop/TaskDrop';

export const CalendarDay = () => {
  return (
    <div className="day-calendar-page">
      <DayCalendarHead />
      <TaskCard/>
      <TaskDrop/>
    </div>
  );
};

