import { useState } from 'react';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import { addMonths, addDays } from 'date-fns';
// import { useSelector  } from 'react-redux';
import './CalendarToolbar.css';


export const CalendarToolbar = ({
  selectedDate,
  setSelectedDate,
  setPeriodType,
}) => {
  const periodType = useState('month');


  const changeDate = amount => {
    setSelectedDate(prevDate => {
      const newDate =
        periodType === 'month'
          ? addMonths(prevDate, amount)
          : addDays(prevDate, amount);
      return newDate;
    });
  };

  // useEffect(() => {
  //   // eslint-disable-next-line
  //   if (!tasks || tasks.length === 0) {
  //     fetchTasksByPeriod();
  //   }
  //    // eslint-disable-next-line
  // }, [tasks, fetchTasksByPeriod]);

  return (
    <div className="CalendarToolbarWrapper">
      <PeriodPaginator
        periodType={periodType}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        changeDate={changeDate}
      />
      <PeriodTypeSelect periodType={periodType} setPeriodType={setPeriodType} />
    </div>
  );
};
