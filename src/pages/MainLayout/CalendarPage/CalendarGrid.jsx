import React from 'react';
import './CalendarGrid.css';
import { useSelector, useDispatch } from 'react-redux';
import { getYear, getMonth, getDate, getDay, parseISO } from 'date-fns';
import { changeSelectedDate } from '../../../redux/date/actions';
import { fetchTasks } from 'redux/tasks/operation';

export const CalendarGrid = () => {
  const selectedDate = useSelector(state => state.date);
  const dateObject = parseISO(selectedDate);
  const dispatch = useDispatch();

  console.log(selectedDate);

  const currentYear = getYear(dateObject);
  const currentMonth = getMonth(dateObject);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = getDate(lastDayOfMonth);

  const calendarGrid = [];
  const emptyCells = (getDay(firstDayOfMonth) + 6) % 7;

  // GET USER TASK LIST ------------------------------------------
  const TASK = useSelector(fetchTasks);
  console.log(TASK);




  // --------------------------------------------------------------

  for (let i = 0; i < emptyCells; i++) {
    calendarGrid.push(<div key={`empty-${i}`} className="empty-cell"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = getDay(date);
    const isWeekend = dayOfWeek === 6 || dayOfWeek === 0;
  
    calendarGrid.push(
      <div
        key={`day-${day}`}
        className={`calendar-cell ${isWeekend ? 'weekend' : ''}`}
      >
        {day}
      </div>
    );
  }

  const weeks = [];
  let currentWeek = [];

  for (let i = 0; i < emptyCells + daysInMonth; i++) {
    if (i > 0 && i % 7 === 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentWeek.push(calendarGrid[i]);
  }

  weeks.push(currentWeek);

  const handleDayClick = (day) => {

// !!!!!!! - DATE - зберігалась на один день назад. Поправила для тесту ------
    const newDate = new Date(currentYear, currentMonth, day + 1);
    dispatch(changeSelectedDate(newDate));
  };

  return (
    <div className="calendar-grid">
      <table className="calendar-table">
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={`week-${weekIndex}`}>
              {week.map((day, dayIndex) => (
                <td
                  key={`day-${weekIndex}-${dayIndex}`}
                  className={day.props.className}
                  onClick={() => handleDayClick(parseInt(day.props.children))}
                >
                  <div className="calendar-day">{day.props.children}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
