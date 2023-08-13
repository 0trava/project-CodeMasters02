import React, { useState, useEffect, useCallback } from 'react';
import { PeriodPaginator } from './PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect';
import { format } from 'date-fns';

import task from './task.json';

export const CalendarToolbar = ({ tasks, setTasks }) => {
  const [periodType, setPeriodType] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const fetchTasksByPeriod = useCallback(async () => {
    try {
      const formattedDate = format(
        selectedDate,
        "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      );
      console.log(formattedDate);
      const response = await fetch(
        // `?periodType=${periodType}&selectedDate=${formattedDate}` //process.env.DB_HOST
        `${task}?periodType=${periodType}&selectedDate=${formattedDate}`
      );
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks by period:', error);
    }
  }, [selectedDate, setTasks, periodType]);

  useEffect(() => {
    if (!tasks || tasks.length === 0) {
      fetchTasksByPeriod();
    }
  }, [tasks, fetchTasksByPeriod]);

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
