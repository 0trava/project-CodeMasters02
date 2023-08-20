import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import { addMonths, addDays } from 'date-fns';

import './CalendarToolbar.css';

export const CalendarToolbar = ({
  selectedDate,
  setSelectedDate,
  periodType,
  setPeriodType,
  currentDate,
}) => {
  const changeDate = amount => {
    setSelectedDate(prevDate => {
      const newDate =
        periodType === 'month'
          ? addMonths(prevDate, amount)
          : addDays(prevDate, amount);
      return newDate;
    });
  };

  return (
    <div className="CalendarToolbarWrapper">
      <PeriodPaginator
        periodType={periodType}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setPeriodType={setPeriodType}
        changeDate={changeDate}
        currentDate={currentDate}
      />
      <PeriodTypeSelect periodType={periodType} setPeriodType={setPeriodType} />
    </div>
  );
};
