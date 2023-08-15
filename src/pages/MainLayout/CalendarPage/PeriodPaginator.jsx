import React, { useState } from 'react';
import { format, addMonths, addDays } from 'date-fns';
import './PeriodPaginator.css';
import sprite from '../../../images/sprite.svg';

export const PeriodPaginator = ({ selectedDate, setSelectedDate }) => {
  const [periodType] = useState('month');

  const changeDate = amount => {
    if (periodType === 'month') {
      setSelectedDate(addMonths(selectedDate, amount));
    } else if (periodType === 'day') {
      setSelectedDate(addDays(selectedDate, amount));
    }
  };

  const periodFormat = type => {
    if (type === 'month') {
      return format(selectedDate, 'MMMM yyyy').toUpperCase();
    } else if (type === 'day') {
      return format(selectedDate, 'd MMMM yyyy').toUpperCase();
    }
    return '';
  };

  return (
    <div className="dateWrapper">
      <div className="currentDate">{periodFormat('month')}</div>
      <div>
        <button className="chevronLeftBtn" onClick={() => changeDate(-1)}>
          <svg className="icon-chevron" width="16" height="16">
            <use href={sprite + '#icon-chevron-left'}></use>
          </svg>
        </button>
        <button className="chevronRightBtn" onClick={() => changeDate(1)}>
          <svg className="icon-chevron" width="16" height="16">
            <use href={sprite + '#icon-chevron-right'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
