import React, { useState, useEffect } from 'react';
import PeriodPaginator from './PeriodPaginator';
import PeriodTypeSelect from './PeriodTypeSelect';

export const CalendarToolbar = ({ tasks, setTasks }) => {
  const [periodType, setPeriodType] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const fetchTasksByPeriod = async () => {
    try {
      const response = await fetch(
        `DB_HOST?periodType=${periodType}&selectedDate=${selectedDate}`
      );
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks by period:', error);
    }
  };

  useEffect(() => {
    if (tasks.length === 0) {
      fetchTasksByPeriod();
    }
  }, [selectedDate, periodType, tasks]);

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
