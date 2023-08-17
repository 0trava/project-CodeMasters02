import React from 'react';
import { useSelector } from "react-redux";
import { CalendarToolbar } from './CalendarToolbar';
import './CalendarPage.css';
import { CalendarGrid } from './CalendarGrid';

export const CalendarPage = ({ selectedDate }) => {
  const dateValue = useSelector(state => state.date); 

  console.log((dateValue))
  return (
    <div className="calendar-page">
      <CalendarToolbar selectedDate={dateValue} />
      <CalendarGrid selectedDate={dateValue} />
      <div className="calendar-content">{/* your Routes or other content */}</div>
    </div>
  );
};
