import React from 'react';
import { useParams } from 'react-router-dom';
import {MonthCalendarHead} from './MonthCalendarHead';
import {CalendarTable} from './CalendarTable';
import "./ChoosedMonth.css"

export const ChoosedMonth = ({tasks }) => {
  const { currentDate } = useParams();

  return (
    <div className='month-container'>
      <MonthCalendarHead />
      <CalendarTable currentDate={currentDate} tasks={tasks} />
    </div>
  );
};
