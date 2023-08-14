import React from 'react';
import "./PeriodTypeSelect.css"

export const PeriodTypeSelect = ({ periodType, setPeriodType }) => {
  return (
    <div className='set-period-btn'>
      <button
        className={periodType === 'month' ? 'active' : ''}
        onClick={() => setPeriodType('month')}
      >
        Month
      </button>

      <button
        className={periodType === 'day' ? 'active' : ''}
        onClick={() => setPeriodType('day')}
      >
        Day
      </button>
    </div>
  );
};