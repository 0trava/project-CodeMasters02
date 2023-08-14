import React, { useState, useMemo, useEffect } from 'react';

import { CalendarToolbar } from './CalendarToolbar';
import './CalendarPage.css';
import { CalendarGrid } from './CalendarGrid';

export const CalendarPage = () => {
  const currentDate = useMemo(() => new Date(), []);
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(currentDate);
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
        loginUser={loginUser}
        setSelectedDate={setSelectedDate}
      />

      <div className="calendar-content"></div>
      <CalendarGrid
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};
