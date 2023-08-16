import React, { useState, useEffect, useMemo } from 'react';
// eslint-disable-next-line
// import { Route, Navigate, Routes } from 'react-router-dom';
import { CalendarToolbar } from './CalendarToolbar';
import './CalendarPage.css';
import { CalendarGrid } from './CalendarGrid';

export const CalendarPage = () => {
  // eslint-disable-next-line
  const currentDate = useMemo(() => new Date(), []);
  // eslint-disable-next-line
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const fetchTasks = async () => {
    // try {
    //   const response = await fetch(process.env.DB_HOST);
    //   const data = await response.json();
    //   setTasks(data);
    // } catch (error) {
    //   console.log('Error fetching tasks:',
    //    error
    //    );
    // }
  };

  useEffect(() => {
    if (tasks.length === 0) {
      fetchTasks();
    }
  }, [tasks]);
  // eslint-disable-next-line
  const periodType = 'month';
  // eslint-disable-next-line

  return (
    <div className="calendar-page">
      <CalendarToolbar
        className="calendar-toolbar"
        tasks={tasks}
        setTasks={setTasks}
        currentDate={currentDate}
        setSelectedDate={setSelectedDate}
      />
      
      <CalendarGrid
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      <div className="calendar-content">{/* <Routes> */}</div>
    </div>
  );
};
