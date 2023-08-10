import React, { useState, useEffect } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import CalendarToolbar from './CalendarToolbar';
import ChoosedMonth from './CalendarMonth/ChoosedMonth';
import ChoosedDay from './CalendarDay/ChoosedDay';

export const CalendarPage = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/calendar') {
      history.push(`/calendar/month/${currentDate}`);
    }
  }, [location.pathname, history]);

  const currentDate = new Date();

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('API_URL_HERE');
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

      <Switch>
        <Route path="/calendar/month/:currentDate">
          <ChoosedMonth tasks={tasks} />
        </Route>
        <Route path="/calendar/day/:selectedDate">
          <ChoosedDay />
        </Route>

        <Redirect from="/calendar" to={`/calendar/month/${currentDate}`} />
      </Switch>
    </div>
  );
};
