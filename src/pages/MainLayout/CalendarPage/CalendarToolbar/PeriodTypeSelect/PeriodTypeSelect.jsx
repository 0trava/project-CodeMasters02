import React from 'react';
import './PeriodTypeSelect.css';
import { NavLink } from 'react-router-dom';

import { format } from 'date-fns';

export const PeriodTypeSelect = ({ periodType, setPeriodType }) => {
  const currentDate = format(Date.now(), 'yyyy-MM-dd');

  return (
    <div className="typeDateWrapper">
      <NavLink
        to={`month/${currentDate}`}
        className='monthBtn'
        onClick={() => setPeriodType('month')}
      >
        Month
      </NavLink>

      <NavLink
        to={`day/${currentDate}`}
        className='dayBtn'
        onClick={() => setPeriodType('day')}
      >
        Day
      </NavLink>
    </div>
  );
};
