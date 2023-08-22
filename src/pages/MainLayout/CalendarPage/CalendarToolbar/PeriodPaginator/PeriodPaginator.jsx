import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSelectedDate } from '../../../../../redux/date/actions';
import sprite from '../../../../../images/sprite.svg';
import { format, addMonths, addDays, parseISO } from 'date-fns';
import './PeriodPaginator.css';

export const PeriodPaginator = ({
  periodType,
  selectedDate,
  setSelectedDate,
}) => {
  const dispatch = useDispatch();

  const handleDateChange = amount => {
    let newDate;
    if (periodType === 'month') {
      newDate = addMonths(parseISO(selectedDate), amount);
    } else if (periodType === 'day') {
      newDate = addDays(parseISO(selectedDate), amount);
    }
    const testDate = new Date(newDate);

    dispatch(changeSelectedDate(testDate));


    setSelectedDate(newDate);

  };

  const periodFormat = () => {
    if (periodType === 'month') {
      return format(parseISO(selectedDate), 'MMMM yyyy').toUpperCase();
    } else if (periodType === 'day') {
      return format(parseISO(selectedDate), ' d MMMM yyyy').toUpperCase();
    }
    return 'Invalid period type';
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
