import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedDate } from 'redux/date/actions';
import './DayCalendarHead.css';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export const DayCalendarHead = ({   setSelectDay, selectDay}) => {
  const currentDate = new Date();
  const selectedDate = useSelector(state => state.date);
  const days = [...workDayNames, ...weekendDayNames];
  // const [selectedDate, setSelectedDate] = useState(selectDay);
  const isMobile = window.innerWidth <= 768;
  const currentDayIndex = currentDate.getDay();
  const dispatch = useDispatch();


  // Вибрана дата
  console.log(selectedDate);

 
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



  return (
    <div className="day-calendar-head">
        {days.map((dayName, index) => {
        let dayOffset = 0;
        if (index <= 4) {
          dayOffset = index - currentDayIndex;
        } else if (index === 5) {
          if (currentDayIndex === 0) {
            dayOffset = 0; 
          } else {
            dayOffset = 6 - currentDayIndex;
          }
        } else if (index === 6) {
          if (currentDayIndex === 0) {
            dayOffset = 1; 
          } else {
            dayOffset = 7 - currentDayIndex;
          }
        }

        const day = new Date(currentDate);
        day.setDate(currentDate.getDate() + dayOffset+1);


        return (
          <div
          key={index}
          className={index === currentDayIndex ? 'current-day' : ''}
          data-short-name={dayName.charAt(0)}
          onClick={() => handleDateClick(day)}
        >
            {isMobile ? (
              <div className="short-day-name">{dayName.charAt(0)}</div>
            ) : null}
            <div className="day-name">{dayName}</div>
            <div className="day-date" id={day.getDate()}>{day.getDate()}</div>
          </div>
        );
      })}
    </div>
  );
};
