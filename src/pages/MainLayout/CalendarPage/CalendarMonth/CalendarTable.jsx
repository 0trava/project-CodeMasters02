import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { format, addDays } from 'date-fns';

export const CalendarTable = ({ currentDate, tasks }) => {
  const navigate = useNavigate();
  const startOfWeek = addDays(new Date(), 1);
  const daysOfWeek = [...Array(7)].map((_, index) =>
    addDays(startOfWeek, index)
  );
  const redirectToDay = date => {
    navigate(`/calendar/day/${date}`);
  };

  return (
    <table>
      <thead>
        <tr>
          {daysOfWeek.map(day => (
            <th key={day}>{format(day, 'E')}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeksOfMonth.map(week => (
          <tr key={week}>
            {week.map(day => (
              <td key={day}>
                <div className="day-cell">
                  <span className="day-number">{format(day, 'd')}</span>
                  <ul className="tasks-list">
                    {tasks.map(task => (
                      <li key={task.id}>{task.title}</li>
                    ))}
                  </ul>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
