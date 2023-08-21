import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeSelectedDate } from 'redux/date/actions';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';
import './DayCalendarHead.css';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export const DayCalendarHead = ({ setSelectDay, selectDay }) => {
  const currentDate = new Date();
  const days = [...workDayNames, ...weekendDayNames];
  const [selectedDate, setSelectedDate] = useState(selectDay);
  const isMobile = window.innerWidth <= 768;
  const currentDayIndex = currentDate.getDay();
  const dispatch = useDispatch();

  // Вибрана дата
  console.log(selectDay);

  useEffect(() => {
    const calendarDayElements = document.querySelectorAll('.calendar-day');
    calendarDayElements.forEach(element => {
      const shortName = element.getAttribute('data-short-name');
      const dayDateElement = element.querySelector('.day-date');
      dayDateElement.setAttribute('data-short-name', shortName);
    });
  }, []);

  // ЗМІНА ДАТИ
  const handleDateClick = date => {
    let startDay = new Date(date);
    startDay.setHours(0);
    startDay.setMinutes(0);
    startDay.setSeconds(0);
    startDay.setMilliseconds(0);
    const dateToChange = startDay.toISOString();
    setSelectDay(dateToChange);

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
        const dayDate = day.getDate();

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
            <div className="day-date">{dayDate}</div>
          </div>
        );
      })}
    </div>
  );
};
