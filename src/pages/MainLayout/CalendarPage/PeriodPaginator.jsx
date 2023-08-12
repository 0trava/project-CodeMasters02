import React, { useState } from 'react';
import { format, addMonths, addDays } from 'date-fns';

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
    <div>
      <div>{periodFormat('month')}</div>

      <button onClick={() => changeDate(-1)}>
        <svg className="icon">
          <use xlinkHref="../images/sprite.svg#icon-chevron-left"></use>
        </svg>
      </button>
      <button onClick={() => changeDate(1)}>
        <svg className="icon">
          <use xlinkHref="../images/sprite.svg#icon-chevron-right" />
        </svg>
      </button>
    </div>
  );
};
