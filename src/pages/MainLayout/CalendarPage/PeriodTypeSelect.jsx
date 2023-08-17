import React, { useState } from 'react';
import './PeriodTypeSelect.css';

export const PeriodTypeSelect = () => {
  const [periodType, setPeriodType] = useState('month');
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
