import React from 'react';
import './PeriodTypeSelect.css';

export const PeriodTypeSelect = ({ periodType, setPeriodType }) => {
  return (
    <div className="typeDateWrapper">
      <button
        className={`${periodType === 'month' ? 'active' : ''} monthBtn`}
        onClick={() => setPeriodType('month')}
      >
        Month
      </button>

      <button
        className={`${periodType === 'day' ? 'active' : ''} dayBtn`}
        onClick={() => setPeriodType('day')}
      >
        Day
      </button>
    </div>
  );
};
