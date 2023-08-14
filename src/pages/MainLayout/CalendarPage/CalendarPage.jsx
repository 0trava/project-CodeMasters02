import React, { useState, useMemo, useEffect } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { CalendarToolbar } from './CalendarToolbar';
import { ChoosedMonth } from './CalendarMonth/ChoosedMonth';
import { ChoosedDay } from './CalendarDay/ChoosedDay';
import './CalendarPage.css';

export const CalendarPage = () => {
  const currentDate = useMemo(() => new Date(), []);
  const [tasks, setTasks] = useState([]);
  const [userToken, setUserToken] = useState(null);

  const fetchTasks = async () => {
    try {
      const baseUrl = 'https://project-codemasters02-backend.onrender.com';

      if (userToken) {
        const response = await fetch(`${baseUrl}/tasks`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
          },
        });

        const data = await response.json();
        setTasks(data);
      }
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const baseUrl = 'https://project-codemasters02-backend.onrender.com';
      const response = await fetch(`${baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setUserToken(data.token);
    } catch (error) {
      console.log('Error logging in:', error);
    }
  };

  useEffect(() => {
    if (!tasks.length && userToken) {
      fetchTasks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks, userToken]);

  return (
    <div className="calendar-page">
      <CalendarToolbar
        className="calendar-toolbar"
        tasks={tasks}
        setTasks={setTasks}
        currentDate={currentDate}
        loginUser={loginUser} // Pass the login function to the toolbar
      />

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
