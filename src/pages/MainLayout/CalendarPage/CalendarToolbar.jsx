import React, { useState, useEffect, useCallback } from 'react';
import { PeriodPaginator } from './PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect';
// eslint-disable-next-line
import { format } from 'date-fns';

import './CalendarToolbar.css';
import { MonthCalendarHead } from './MonthCalendarHead';
export const CalendarToolbar = ({ tasks, setTasks }) => {
  const [periodType, setPeriodType] = useState('month');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const fetchTasksByPeriod = useCallback(async () => {
    // try {
    //   const formattedDate = format(
    //     selectedDate,
    //     "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    //   );
    //   console.log(formattedDate);
    //   const response = await fetch(
    //     `${process.env.DB_HOST}?periodType=${periodType}&selectedDate=${formattedDate}`
    //   );
    //   const data = await response.json();
    //   setTasks(data);
    // } catch (error) {
    //   console.error('Error fetching tasks by period:',
    //    error
    //    );
    // }
    // eslint-disable-next-line
  }, [periodType, selectedDate, setTasks]);

  useEffect(() => {
    if (!tasks || tasks.length === 0) {
      fetchTasksByPeriod();
    }
  }, [tasks, fetchTasksByPeriod]);

  return (
    <>
      <div className="CalendarToolbarWrapper">
        <PeriodPaginator
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <PeriodTypeSelect
          periodType={periodType}
          setPeriodType={setPeriodType}
        />
      </div>
      <MonthCalendarHead />
    </>
  );
};
