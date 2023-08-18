import React from 'react';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export const DayCalendarHead = () => {
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const days = [...workDayNames, ...weekendDayNames];

  return (
    <div className="day-calendar-head">
      <div>!!!DayCalendarHead!!!</div>
      {days.map((dayName, index) => {
       const dayOffset = index <= 4 ? index - currentDayIndex : index - currentDayIndex ;
        const day = new Date(currentDate);
        day.setDate(currentDate.getDate() + dayOffset);

        return (
          <div key={index} className={index === currentDayIndex ? 'current-day' : ''}>
            <div className="day-name">{dayName}</div>
            <div className="day-date">{day.getDate()}</div>
          </div>
        );
      })}
    </div>
  );
};
