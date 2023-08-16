import { useState } from 'react';
import { StaticticsToolbar } from '../StaticticsToolbar/StaticticsToolbar';
import { StatisticsCalendar } from '../StatisticsCalendar/StatisticsCalendar';
import { format, addDays } from 'date-fns';

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
    <>
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
    </>
  );
};
