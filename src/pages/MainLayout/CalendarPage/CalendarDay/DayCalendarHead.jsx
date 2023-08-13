import React from 'react';
import { format } from 'date-fns';
import './DayCalendarHead.css';

export const DayCalendarHead = ({ selectedDate }) => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="day-calendar-head">
      {daysOfWeek.map((day, index) => (
        <div key={index} className="day-header">
          {format(selectedDate, 'E') === day ? (
            <strong>{day}</strong>
          ) : (
            <span>{day}</span>
          )}
        </div>
      ))}
    </div>
  );
};
