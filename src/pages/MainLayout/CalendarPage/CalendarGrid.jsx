import React from 'react';
import './CalendarGrid.css';

export const CalendarGrid = ({ selectedDate }) => {
  const currentYear = selectedDate.getFullYear();
  const currentMonth = selectedDate.getMonth();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const calendarGrid = [];
  const emptyCells = (firstDayOfMonth.getDay() + 6) % 7;

  for (let i = 0; i < emptyCells; i++) {
    calendarGrid.push(<div key={`empty-${i}`} className="empty-cell"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
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

  return (
    <div className="calendar-grid">
      <table>
        <thead>
          <tr className="week-day">
            {daysOfWeek.map((day, index) => (
              <th key={`weekday-${index}`} className="weekday-cell">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="calendar-body">
          {weeks.map((week, weekIndex) => (
            <tr key={`week-${weekIndex}`} className="week-row">
              {week.map((day, dayIndex) => (
                <td
                  key={`day-${weekIndex}-${dayIndex}`}
                  className={day.props.className}
                >
                  {day.props.children}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
