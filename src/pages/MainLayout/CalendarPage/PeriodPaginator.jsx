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
    <div className="period-format">
      <div className="current-month">{periodFormat('month')}</div>
      <div className="period-change-btn">
        <button className="chevron-btn left" onClick={() => changeDate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="#DCE3E5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <use
              href={sprite + '#icon-chevron-left'}
              style={{ verticalAlign: 'middle' }}
            ></use>
          </svg>
        </button>
        <button className="chevron-btn right" onClick={() => changeDate(1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#343434"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <use
              href={sprite + '#icon-chevron-right'}
              style={{ verticalAlign: 'middle' }}
            ></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
