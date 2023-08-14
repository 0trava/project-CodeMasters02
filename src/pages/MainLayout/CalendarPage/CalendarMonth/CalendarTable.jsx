import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import "./CalendarTable"


export const CalendarTable = ({ currentDate, tasks }) => {
  const navigate = useNavigate();
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  const daysOfMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const redirectToDay = date => {
    navigate(`/calendar/day/${date}`);
  };

  return (
    <table>
      <thead>
        <tr>
          {daysOfMonth.map(day => (
            <th
              key={day}
              onClick={() => redirectToDay(format(day, 'yyyy-MM-dd'))}
            >
              <Link to={`/calendar/day/${format(day, 'yyyy-MM-dd')}`}>
                {format(day, 'E')}
              </Link>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {daysOfMonth.map(day => (
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
      </tbody>
    </table>
  );
};
