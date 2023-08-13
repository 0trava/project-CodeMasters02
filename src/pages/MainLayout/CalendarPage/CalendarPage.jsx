import React, { useState, useMemo } from 'react'; //useEffect
import { Route, Navigate, Routes } from 'react-router-dom';
import { CalendarToolbar } from './CalendarToolbar';
import { ChoosedMonth } from './CalendarMonth/ChoosedMonth';
import { ChoosedDay } from './CalendarDay/ChoosedDay';
import './CalendarPage.css';

import tasksData from './task.json';

export const CalendarPage = () => {
  const currentDate = useMemo(() => new Date(), []);
  const [tasks, setTasks] = useState(tasksData); //useState([]);

  // const fetchTasks = async () => {
  //   try {
  //     const response = await fetch(process.env.DB_HOST);
  //     const data = await response.json();
  //     setTasks(data);
  //   } catch (error) {
  //     console.log('Error fetching tasks:', error);
  //   }
  // };

  // useEffect(() => {
  //   if (tasks.length === 0) {
  //     fetchTasks();
  //   }
  // }, [tasks]);

  console.log('currentDate:', currentDate);
  const periodType = 'month';
  console.log('periodType:', periodType);
  const selectedDate = new Date();
  console.log('selectedDate:', selectedDate);

  return (
    <div className="calendar-page">
      <CalendarToolbar tasks={tasks} setTasks={setTasks} />

      <div className="calendar-content">
        <Routes>
          <Route
            path="/calendar/month/:currentDate"
            element={<ChoosedMonth tasks={tasks} />}
          />
          <Route path="/calendar/day/:selectedDate" element={<ChoosedDay />} />
          <Route
            path="/calendar"
            element={<Navigate to={`/calendar/month/${currentDate}`} />}
          />
        </Routes>
      </div>
    </div>
  );
};
