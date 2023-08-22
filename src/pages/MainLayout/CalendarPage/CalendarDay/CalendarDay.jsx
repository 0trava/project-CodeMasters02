import React, { useEffect } from 'react';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { fetchTasks } from 'redux/tasks/operation';
import { useSelector, useDispatch } from 'react-redux';
import { TasksColumnsSchedule } from 'components/ComponentsTasks/TasksColumnsSchedule/TasksColumnsSchedule';
import { selectTasks } from 'redux/tasks/selectors';
import { setSelectedDate } from 'redux/date/actions';
import { selectToken } from 'redux/auth/selectors';

export const CalendarDay = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.date);
  const userIsLogin = useSelector(selectToken);

  // const taskList = useSelector(state => state.task);

  // GET USER TASK LIST FOR DAY------------------------------------------

  useEffect(() => {
      if (userIsLogin) {
        updatePage()
      }
// eslint-disable-next-line
  }, [selectedDate, dispatch]);


  const updatePage = async () => {
    let startDay = new Date(selectedDate);
    startDay.setHours(0);
    startDay.setMinutes(0);
    startDay.setSeconds(0);
    startDay.setMilliseconds(0);
    const dateFrom = startDay.toISOString();

    let endDay = new Date(selectedDate);
    endDay.setHours(24);
    endDay.setMinutes(0);
    endDay.setSeconds(0);
    endDay.setMilliseconds(0);
    const dateTo = endDay.toISOString();


    await dispatch(fetchTasks({ dateFrom, dateTo }));
  }

  // Отримаємо список тасків
  const allTaskForDay = useSelector(selectTasks);

  // Фільтруємо по статусу виконання ( To do, In progress, Done)
  //  categorizedArrays.in-progress || categorizedArrays.done  || categorizedArrays.to-do
  const categorizedArrays = allTaskForDay.reduce((result, currentItem) => {
    const category = currentItem.category.replace('-', '');

    if (!result[category]) {
      result[category] = [];
    }

    result[category].push(currentItem);

    return result;
  }, {});

  // ___________________________________________________________________

  return (
    <div className="day-calendar-page">
      <DayCalendarHead setSelectDay={setSelectedDate} selectDay={selectedDate} />

      <TasksColumnsSchedule tasks={categorizedArrays} selectedDate={selectedDate}/>
    </div>
  );
};
