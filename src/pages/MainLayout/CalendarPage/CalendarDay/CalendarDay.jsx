import React, { useState,useEffect } from 'react';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { fetchTasks } from 'redux/tasks/operation';
import { useSelector, useDispatch } from 'react-redux';

import { TasksColumnsSchedule } from 'components/ComponentsTasks/TasksColumnsSchedule/TasksColumnsSchedule';
import { TasksColumn } from 'components/ComponentsTasks/TasksColumn/TasksColumn';

export const CalendarDay = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.date);
  const [selectDay, setSelectDay] = useState(selectedDate);

   // GET USER TASK LIST FOR DAY------------------------------------------

   useEffect(() => {
    console.log(selectedDate);
    const dateFrom = new Date(selectedDate).toISOString();
    const dateTo = new Date(selectedDate).toISOString();
    dispatch(fetchTasks({ dateFrom, dateTo }));
  }, [selectDay]);

  // const allTaskForDay = useSelector(state => state.task.task);
  // console.log(allTaskForDay);


  return (
    <div className="day-calendar-page">
      <DayCalendarHead />

      <TasksColumnsSchedule />
    </div>
  );
};
