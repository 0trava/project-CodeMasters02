import React from 'react';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { TaskCard } from 'components/ComponentsTasks/TaskCard/TaskCard';

export const CalendarDay = () => {
  return (
    <div className="day-calendar-page">
      <DayCalendarHead />
      <TaskCard/>
    </div>
  );
};

