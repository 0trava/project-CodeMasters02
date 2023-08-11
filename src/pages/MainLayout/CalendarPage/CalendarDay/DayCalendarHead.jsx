import React from 'react';
import { format } from 'date-fns';

export const DayCalendarHead = ({ currentDate }) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="day-calendar-head">
      {daysOfWeek.map((day, index) => (
        <div key={index} className="day-header">
          {format(currentDate, 'E') === day ? (
            <strong>{day}</strong>
          ) : (
            <span>{day}</span>
          )}
        </div>
      ))}
    </div>
  );
};
