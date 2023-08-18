import React from 'react';
import { useSelector } from 'react-redux';
import { CalendarToolbar } from './CalendarToolbar/CalendarToolbar';
import './CalendarPage.css';
import { Suspense } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Outlet } from 'react-router-dom';

export const CalendarPage = () => {
  const selectedDate = useSelector(state => state.date);

  return (
    <div className="calendar-page">
      <CalendarToolbar
        className="calendar-toolbar"
        selectedDate={selectedDate}
      />
      <Suspense fallback={<BeatLoader color={'#3E85F3'} size={30} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
