import React from 'react';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { TasksColumnsSchedule } from 'components/ComponentsTasks/TasksColumnsSchedule/TasksColumnsSchedule';

export const CalendarDay = () => {
  return (
    <div className="day-calendar-page">
      <DayCalendarHead />
      <TasksColumnsSchedule />
    </div>
  );
};
