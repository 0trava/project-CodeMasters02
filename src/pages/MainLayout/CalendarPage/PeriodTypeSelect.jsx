import React from 'react';

export const PeriodTypeSelect = ({ periodType, setPeriodType }) => {
  return (
    <div>
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
