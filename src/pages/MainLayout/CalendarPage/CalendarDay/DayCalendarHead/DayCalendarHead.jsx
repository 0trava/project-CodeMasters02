import React, { useState, useEffect }from 'react';
import './DayCalendarHead.css';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export const DayCalendarHead = ({setSelectDay, selectDay}) => {
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const days = [...workDayNames, ...weekendDayNames];
  const [selectedDate, setSelectedDate] = useState(selectDay);
  const isMobile = window.innerWidth <= 768;

  // Вибрана дата
  console.log(selectDay);

 
  useEffect(() => {
    const calendarDayElements = document.querySelectorAll('.calendar-day');
    calendarDayElements.forEach((element) => {
      const shortName = element.getAttribute('data-short-name');
      const dayDateElement = element.querySelector('.day-date');
      dayDateElement.setAttribute('data-short-name', shortName); 
    });
  }, []);


 // ЗМІНА ДАТИ
  const handleDateClick = (date) => {

    let startDay = new Date(date);
    startDay.setHours(0);
    startDay.setMinutes(0);
    startDay.setSeconds(0);
    startDay.setMilliseconds(0);
    const dateToChange = startDay.toISOString();
    setSelectDay(dateToChange);

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
