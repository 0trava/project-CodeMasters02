import React, { useState } from 'react';
import './PeriodTypeSelect.css';
import { NavLink } from 'react-router-dom';

import { format } from 'date-fns';

export const PeriodTypeSelect = () => {
  const [periodType, setPeriodType] = useState('month');
  // TEST!!!!


  const currentDate = format(Date.now(), 'yyyy-MM-dd');
  

  
  // TEST!!!!
  return (
    <div className="typeDateWrapper">
      <NavLink
        to={`month/${currentDate}`}
        className={`${periodType === 'month' ? 'active' : ''} monthBtn`}
        onClick={() => setPeriodType('month')}
      >
        Month
      </NavLink>

      <NavLink
        to={`day/${currentDate}`}
        className={`${periodType === 'day' ? 'active' : ''} dayBtn`}
        onClick={() => setPeriodType('day')}
      >
        Day
      </NavLink>
    </div>
  );
};
