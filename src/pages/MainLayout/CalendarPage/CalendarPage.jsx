import React from 'react';
import { useSelector } from "react-redux";
import { CalendarToolbar } from './CalendarToolbar';
import './CalendarPage.css';
import { CalendarGrid } from './CalendarGrid';

export const CalendarPage = () => {
  const selectedDate = useSelector(state => state.date);

  return (
    <div className="calendar-page">

      <CalendarToolbar className="calendar-toolbar" selectedDate={selectedDate} />
      <CalendarGrid selectedDate={selectedDate} />
      <div className="calendar-content">{/* Routes */}</div>

    </div>
  );
};
