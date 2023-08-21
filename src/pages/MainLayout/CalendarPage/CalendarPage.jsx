import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CalendarToolbar } from './CalendarToolbar/CalendarToolbar';
import './CalendarPage.css';
import { Suspense } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Outlet } from 'react-router-dom';
import { changeSelectedDate } from 'redux/date/actions';

export const CalendarPage = () => {
  const selectedDate = useSelector(state => state.date);
  const [periodType, setPeriodType] = useState('month');
  const currentDate = new Date();
  const dispatch = useDispatch();


  const handleSelectedDateChange = newDate => {
    dispatch(changeSelectedDate(newDate));
  };

  return (
    <div className="calendar-page">
      <CalendarToolbar
        className="calendar-toolbar"
        selectedDate={selectedDate}
        setSelectedDate={handleSelectedDateChange}
        periodType={periodType}
        setPeriodType={setPeriodType}
        currentDate={currentDate}
      />
      <Suspense fallback={<BeatLoader color={'#3E85F3'} size={30} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
