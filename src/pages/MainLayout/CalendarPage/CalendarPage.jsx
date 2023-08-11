import React, { useState, useEffect, useMemo } from 'react';
import {
  Route,
  Navigate,
  useNavigate,
  useLocation,
  Routes
} from 'react-router-dom';
import './CalendarPage.css'
import { CalendarToolbar } from './CalendarToolbar';
import { ChoosedMonth } from './CalendarMonth/ChoosedMonth';
import { ChoosedDay } from './CalendarDay/ChoosedDay';

export const CalendarPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentDate = useMemo(() => new Date(), []);

  useEffect(() => {
    if (location.pathname === '/calendar') {
      navigate(`/calendar/month/${currentDate}`);
    }
  }, [location.pathname, navigate, currentDate]);

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('DB_HOST');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    if (tasks.length === 0) {
      fetchTasks();
    }
  }, [tasks]);

  return (
    <div>
      <CalendarToolbar />

      <Routes>
        <Route path="/calendar/month/:currentDate">
          <ChoosedMonth tasks={tasks} />
        </Route>
        <Route path="/calendar/day/:selectedDate">
          <ChoosedDay />
        </Route>

        <Route path="/calendar">
          <Navigate to={`/calendar/month/${currentDate}`} />
        </Route>
      </Routes>
    </div>
  );
};
