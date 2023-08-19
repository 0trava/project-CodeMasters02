import React, { useState, useEffect }from 'react';
import './DayCalendarHead.css';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export const DayCalendarHead = () => {
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const days = [...workDayNames, ...weekendDayNames];
  const [selectedDate, setSelectedDate] = useState(null);
  const isMobile = window.innerWidth <= 768;
  useEffect(() => {
    const calendarDayElements = document.querySelectorAll('.calendar-day');
    calendarDayElements.forEach((element) => {
      const shortName = element.getAttribute('data-short-name');
      const dayDateElement = element.querySelector('.day-date');
      dayDateElement.setAttribute('data-short-name', shortName); 
    });
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="day-calendar-head">
      {days.map((dayName, index) => {
        const dayOffset =
          index <= 4 ? index - currentDayIndex : index - currentDayIndex;
        const day = new Date(currentDate);
        day.setDate(currentDate.getDate() + dayOffset);

        
        return (
          <div
            key={index}
            className={index === currentDayIndex ? 'current-day' : ''}
            data-short-name={dayName.charAt(0)}
            onClick={() => handleDateClick(day)}
          >
            {isMobile  ? (
                <div className="short-day-name">
                  {dayName.charAt(0)} 
                </div>
              ) : null}
            <div className="day-name">{dayName}</div>
            <div className="day-date">{day.getDate()}</div>
            
          </div>
        );
      })}
    </div>
  );
};
