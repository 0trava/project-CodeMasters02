import React, { useState, useEffect, useMemo } from 'react';
import {
  Route,
  Navigate,
  useNavigate,
  useLocation,
  Routes,
} from 'react-router-dom';
import { CalendarToolbar } from './CalendarToolbar';
import { ChoosedMonth } from './CalendarMonth/ChoosedMonth';
import { ChoosedDay } from './CalendarDay/ChoosedDay';
import './CalendarPage.css';
export const CalendarPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentDate = useMemo(() => new Date(), []);
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
    <div className="calendar-page">
      <h1 className="calendar-header">Calendar</h1>
      <CalendarToolbar />
      <div className="calendar-divider" />
      <div className="calendar-content">
        <Routes>
          <Route path="/calendar/month/:currentDate">
            <div className="calendar-route">
              <ChoosedMonth tasks={tasks} />
            </div>
          </Route>
          <Route path="/calendar/day/:selectedDate">
            <div className="calendar-route">
              <ChoosedDay />
            </div>
          </Route>
          <Route path="/calendar">
            <Navigate to={`/calendar/month/${currentDate}`} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};
