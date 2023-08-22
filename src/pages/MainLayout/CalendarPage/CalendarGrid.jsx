import React, { useState, useEffect } from 'react';
import './CalendarGrid.css';
import { useSelector, useDispatch } from 'react-redux';
import { getYear, getMonth, getDate, getDay, parseISO, format  } from 'date-fns';
import { changeSelectedDate } from '../../../redux/date/actions';
import { fetchTasks } from 'redux/tasks/operation';
import { useHistory } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

export const CalendarGrid = () => {
  const selectedDate = useSelector(state => state.date);
  const dateObject = parseISO(selectedDate);
  const dispatch = useDispatch();
  const userIsLogin = useSelector(selectToken);

  const currentYear = getYear(dateObject);
  const currentMonth = getMonth(dateObject);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = getDate(lastDayOfMonth);
  const currentDate = getDay(dateObject);
  const shortFormat = 'yyyy-MM-dd';
  const date1 = new Date(currentDate);  
  const formattedDate1 = format(date1, shortFormat);

  const calendarGrid = [];
  const emptyCells = (getDay(firstDayOfMonth) + 6) % 7;


  // Перевірка що токен валідний
  useEffect(async() => {
    if (userIsLogin) {
      // await dispatch(fetchTasks(`dateFrom:${firstDayOfMonth}&dateTo:${lastDayOfMonth}`));
    }

  }, [dispatch, firstDayOfMonth, lastDayOfMonth ]);

  const history = useHistory();
  const [redirectToDay, setRedirectToDay] = useState(null);

useEffect(() => {
    if (redirectToDay) {
      history.push(`/calendar/day/${redirectToDay}`);
    }
  }, [redirectToDay, history]);

  // --------------------------------------------------------------

  for (let i = 0; i < emptyCells; i++) {
    calendarGrid.push(<div key={`empty-${i}`} className="empty-cell"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = getDay(date);
    const isWeekend = dayOfWeek === 6 || dayOfWeek === 0;
  
    calendarGrid.push(
     <div className="day-wrapper" > 
      <div
        key={`day-${day}`}
        className={`calendar-cell ${isWeekend ? 'weekend' : ''}`}
      >
        {day}
      </div>
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
    const newDate = new Date(currentYear, currentMonth, Date);
    console.log("!!!!!!!!!!!!!!!!!");
    console.log(newDate);
    const testDate = new Date(newDate);

    dispatch(changeSelectedDate(testDate));
    setRedirectToDay(formattedDate1); 
  };
  console.log(Date);
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
