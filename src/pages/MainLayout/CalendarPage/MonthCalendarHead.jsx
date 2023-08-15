import './MonthCalendarHead.css';
const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export const MonthCalendarHead = () => {
  return (
    <>
      <ul className="desktopDayList">
        {workDayNames.map(day => (
          <li className="workDay" key={day}>
            {day}
          </li>
        ))}
        {weekendDayNames.map(day => (
          <li className="weekendDay" key={day}>
            {day}
          </li>
        ))}
      </ul>
      <ul className="mobileDaysList">
        {workDayNames.map(day => (
          <li className="workDay" key={day}>
            {day[0]}
          </li>
        ))}
        {weekendDayNames.map(day => (
          <li className="weekendDay" key={day}>
            {day[0]}
          </li>
        ))}
      </ul>
    </>
  );
};
