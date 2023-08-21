import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedDate, setSelectedDate } from 'redux/date/actions';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';

import './DayCalendarHead.css';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export const DayCalendarHead = () => {
  const currentDate = new Date();
  const days = [...workDayNames, ...weekendDayNames];
  const selectedDate = useSelector(state => state.date);
  const isMobile = window.innerWidth <= 768;
 

  const dispatch = useDispatch();





  useEffect(() => {
    const calendarDayElements = document.querySelectorAll('.calendar-day');
    calendarDayElements.forEach(element => {
      const shortName = element.getAttribute('data-short-name');
      const dayDateElement = element.querySelector('.day-date');
      dayDateElement.setAttribute('data-short-name', shortName);
      dayDateElement.textContent = shortName; 
    });
  }, []);


// СТИЛІ - активна дата
const chackDay= (day) => {
  const dayForPut = new Date(selectedDate);
  if (dayForPut.getDate() === day.getDate()) {
    return "day-date-active";
  } else {
    return "day-date";
  }
}


 // ЗМІНА ДАТИ

  const handleDateClick = (date) => {
    let startDay = new Date(date);
    startDay.setHours(0);
    startDay.setMinutes(0);
    startDay.setSeconds(0);
    startDay.setMilliseconds(0);
    const dateToChange = startDay.toISOString();
    setSelectedDate(dateToChange);

    dispatch(changeSelectedDate(date));
  };

  // Визначення днів тижня для відображення (починаємо з понеділка)
  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const daysToDisplay = [...Array(7)].map((_, index) => addDays(startOfCurrentWeek, index));
  const dayShortNames = days.map(dayName => dayName.charAt(0));

  return (
    <div className="day-calendar-head">
      {daysToDisplay.map((day, index) => {
        const dayName = format(day, 'EE');
        // const dayDate = day.getDate();

        return (
          <div
            key={index}
            className={isSameDay(day, currentDate) ? 'current-day' : ''}
            data-short-name={dayShortNames[index]}
            onClick={() => handleDateClick(day)}
          >
            {isMobile ? (
              <div className="short-day-name">{dayShortNames[index]}</div>
            ) : null}
            <div className="day-name">{dayName}</div>
            
            {/* <div className="day-date" id={day.getDate()}>{day.getDate()}</div> */}
            {/* День */}
            <div className={chackDay(day)} 
                 id={day.getDate()}
                 onClick={() => handleDateClick(day)}
            >{day.getDate()}</div>
          </div>
        );
      })}
    </div>
  );
};
