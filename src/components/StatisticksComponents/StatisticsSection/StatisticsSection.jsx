import { useState } from 'react';
import { StaticticsToolbar } from '../StaticticsToolbar/StaticticsToolbar';
import { StatisticsCalendar } from '../StatisticsCalendar/StatisticsCalendar';
import { format, addDays } from 'date-fns';
import './StatisticsSection.css';
import sprite from '../../../images/sprite.svg';

export const StatisticsSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const changeDate = amount => {
    setSelectedDate(addDays(selectedDate, amount));
    setIsCalendarOpen(false);
  };
  const formattedDate = format(selectedDate, 'd MMMM yyyy').toUpperCase();

  const handleDateChange = date => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  return (
    <section className="statisticsContainer">
      <div className="headWrapper">
        <StaticticsToolbar
          changeDate={changeDate}
          selectedDate={formattedDate}
          toggleCalendar={toggleCalendar}
        />
        {isCalendarOpen && (
          <StatisticsCalendar
            selected={selectedDate}
            onChange={handleDateChange}
          />
        )}
        <div className="periodWrapper">
          <p className="period">
            <svg className="iconEllipse" fill="#ffd2dd">
              <use href={`${sprite}#icon-Ellipse`} />
            </svg>
            By Day
          </p>
          <p className="period">
            <svg className="iconEllipse" fill="#3E85F3">
              <use href={`${sprite}#icon-Ellipse`} />
            </svg>
            By Month
          </p>
        </div>
      </div>
      <div className="chartContainer"></div>
    </section>
  );
};
