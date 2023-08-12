import React from 'react';
import { format } from 'date-fns';
import "./MonthCalendarHead.css"

export const MonthCalendarHead = ({ currentDate }) => {
  const formattedDate = format(currentDate, 'MMMM yyyy');

  return (
    <div className="month-calendar-head">
      <h2>{formattedDate}</h2>
    </div>
  );
};
