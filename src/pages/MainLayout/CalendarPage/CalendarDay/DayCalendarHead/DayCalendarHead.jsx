import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeSelectedDate } from 'redux/date/actions';
import './DayCalendarHead.css';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export const DayCalendarHead = ({ selectedDate, currentDate  }) => {
  // const currentDate = new Date();
  
  const days = [...workDayNames, ...weekendDayNames];
  const isMobile = window.innerWidth <= 768;
  const currentDayIndex = currentDate.getDay();
  const dispatch = useDispatch();

  useEffect(() => {
    const calendarDayElements = document.querySelectorAll('.calendar-day');
    calendarDayElements.forEach(element => {
      const shortName = element.getAttribute('data-short-name');
      const dayDateElement = element.querySelector('.day-date');
      dayDateElement.setAttribute('data-short-name', shortName);
    });
  }, []);

  const handleDateClick = date => {
    dispatch(changeSelectedDate(date));
  };

  return (
    <div className="day-calendar-head">
      {days.map((dayName, index) => {
        const dayOffset = ((index + 7 - currentDayIndex) % 7) - 7;
        const day = new Date(currentDate);
        day.setDate(currentDate.getDate() + dayOffset + 1);

        return (
          <div
            key={index}
            className={
              index === currentDayIndex
                ? 'current-day'
                : day.toDateString() === currentDate.toDateString()
                ? 'highlighted-day'
                : ''
            }
            data-short-name={dayName.charAt(0)}
            onClick={() => handleDateClick(day)}
          >
            {isMobile ? (
              <div className="short-day-name">{dayName.charAt(0)}</div>
            ) : null}
            <div className="day-name">{dayName}</div>
            <div className="day-date">{day.getDate()}</div>
          </div>
        );
      })}
    </div>
  );
};
