import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSelectedDate } from '../../../../../redux/date/actions';
import sprite from '../../../../../images/sprite.svg';
import { format, addMonths, parseISO } from 'date-fns';
import './PeriodPaginator.css';

export const PeriodPaginator = ({ periodType, selectedDate }) => {
  const dispatch = useDispatch();

  const handleDateChange = amount => {
    const newDate = addMonths(parseISO(selectedDate), amount);
    dispatch(changeSelectedDate(newDate));
  };

  // const formatDate = (selectedDate) => {
  //   if (periodType === 'month') {
  //     return format(parseISO(selectedDate), 'MMMM yyyy').toUpperCase();
  //   } else if (periodType === 'day') {
  //     return format(parseISO(selectedDate), ' d MMMM yyyy').toUpperCase();
  //   }
  //   return '';
  // };

  const periodFormat = () => {
    return format(parseISO(selectedDate), 'MMMM yyyy').toUpperCase();
  };

  return (
    <div className="dateWrapper">
      <div className="currentDate">{periodFormat()}</div>
      <div>
        <button
          type="button"
          className="chevronLeftBtn"
          onClick={() => handleDateChange(-1)}
        >
          <svg className="icon-chevron" width="16" height="16">
            <use href={sprite + '#icon-chevron-left'}></use>
          </svg>
        </button>
        <button
          type="button"
          className="chevronRightBtn"
          onClick={() => handleDateChange(1)}
        >
          <svg className="icon-chevron" width="16" height="16">
            <use href={sprite + '#icon-chevron-right'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
