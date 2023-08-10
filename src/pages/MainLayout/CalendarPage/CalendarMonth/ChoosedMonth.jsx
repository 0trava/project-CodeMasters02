import React from 'react';
import { useParams } from 'react-router-dom';
import MonthCalendarHead from './MonthCalendarHead';
import CalendarTable from './CalendarTable';

export const ChoosedMonth = ({ tasks }) => {
  const { currentDate } = useParams();

  return (
    <div>
      <MonthCalendarHead />
      <CalendarTable currentDate={currentDate} tasks={tasks} />
    </div>
  );
};
