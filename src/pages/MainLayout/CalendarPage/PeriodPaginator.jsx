
import React from 'react';
import { format, addMonths  } from 'date-fns';
// import { useSelector } from 'react-redux'
import './PeriodPaginator.css';
import sprite from '../../../images/sprite.svg';
import { setSelectedDate } from  '../../../redux/date/actions'

export const PeriodPaginator = () => {
  // const selectedDate = useSelector(state => state.date);
  const changeDate = amount => {
    setSelectedDate(prevDate => {
      return addMonths(prevDate, amount);
    });
  };

  const handleDateChange = amount => {
    changeDate(amount); 
  };

  const periodFormat = (selectedDate) => {
    return format(selectedDate, 'MMMM yyyy').toUpperCase();
  };
  // console.log((selectedDate))

  return (
    <div className="dateWrapper">
      <div className="currentDate">{periodFormat()}</div>
      <div>
        <button className="chevronLeftBtn" onClick={() => handleDateChange(-1)}>
          <svg className="icon-chevron" width="16" height="16">
            <use href={sprite + '#icon-chevron-left'}></use>
          </svg>
        </button>
        <button className="chevronRightBtn" onClick={() => handleDateChange(1)}>
          <svg className="icon-chevron" width="16" height="16">
            <use href={sprite + '#icon-chevron-right'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
