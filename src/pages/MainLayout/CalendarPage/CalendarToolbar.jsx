import  { useState } from 'react';
import { PeriodPaginator } from './PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect';
import { addMonths, addDays } from 'date-fns';
import { useSelector  } from 'react-redux';
import './CalendarToolbar.css';
import { MonthCalendarHead } from './MonthCalendarHead';

export const CalendarToolbar = ({task, setTasks, setSelectedDate }) => {
  const periodType  = useState('month');
  const selectedDate = useSelector(state => state.date); 

  // const fetchTasksByPeriod = useCallback(async () => {
  //   // try {
  //   //   const formattedDate = format(
  //   //     selectedDate,
  //   //     "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
  //   //   );
  //   //   console.log(formattedDate);
  //   //   const response = await fetch(
  //   //     `${process.env.DB_HOST}?periodType=${periodType}&selectedDate=${formattedDate}`
  //   //   );
  //   //   const data = await response.json();
  //   //   setTasks(data);
  //   // } catch (error) {
  //   //   console.error('Error fetching tasks by period:',
  //   //    error
  //   //    );
  //   // }
    // eslint-disable-next-line
  // }, [periodType, selectedDate, setTasks]);

    
  const changeDate = (amount) => {
    setSelectedDate((prevDate) => {
      const newDate = periodType === 'month'
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
    <>
      <div className="CalendarToolbarWrapper">
        <PeriodPaginator
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          changeDate ={changeDate}
                  />
        <PeriodTypeSelect
        
        />
      </div>
      <MonthCalendarHead />
    </>
  );
};

