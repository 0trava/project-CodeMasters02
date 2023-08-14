import React, { useState, useEffect, useCallback } from 'react';
import { PeriodPaginator } from './PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect';
import { format } from 'date-fns';
import './CalendarToolbar.css';

export const CalendarToolbar = ({ tasks, setTasks }) => {
  const [periodType, setPeriodType] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [userToken, setUserToken] = useState(null);
  const baseApiUrl = 'https://project-codemasters02-backend.onrender.com';

  const fetchTasksByPeriod = useCallback(
    async (dateFrom, dateTo) => {
      try {
        const response = await fetch(
          `${baseApiUrl}/tasks?dateFrom=${dateFrom}&dateTo=${dateTo}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks by period:', error);
      }
    },
    [setTasks]
  );

  useEffect(() => {
    const formattedDate = format(selectedDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    const dateFrom = formattedDate;
    let dateTo = formattedDate;

    if (periodType === 'month') {
      const lastDayOfMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0
      );
      dateTo = format(lastDayOfMonth, "yyyy-MM-dd'T23:59:59.999xxx");
    }

    fetchTasksByPeriod(dateFrom, dateTo);
  }, [selectedDate, periodType, fetchTasksByPeriod]);

  return (
    <div>
      <PeriodPaginator
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <PeriodTypeSelect periodType={periodType} setPeriodType={setPeriodType} />
    </div>
  );
};
