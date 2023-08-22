import React, { useEffect, useState } from 'react';
import './CalendarGrid.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  getYear,
  getMonth,
  getDate,
  getDay,
  parseISO,
  isSameDay,
} from 'date-fns';
import { changeSelectedDate } from '../../../../../redux/date/actions';
import { fetchTasks } from 'redux/tasks/operation';
import { useParams  } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';
import { TaskModal } from 'components/TaskModal/TaskModal';
// import { PeriodPaginator } from '../../CalendarToolbar/PeriodPaginator/PeriodPaginator';


export const CalendarGrid = () => {
  // eslint-disable-next-line
  const { currentDate } = useParams();
  const selectedDate = useSelector(state => state.date);
  const dateObject = parseISO(selectedDate);
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();
  const userIsLogin = useSelector(selectToken);
 
  const currentYear = getYear(dateObject);
  const currentMonth = getMonth(dateObject);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = getDate(lastDayOfMonth);
  const [task, setTask] = useState("");
  const calendarGrid = [];
  const emptyCells = (getDay(firstDayOfMonth) + 6) % 7;




  // GET USER TASK LIST ------------------------------------------
  useEffect(() => {

    if (userIsLogin) {
      const dateFrom = new Date(firstDayOfMonth).toISOString();
      const dateTo = new Date(lastDayOfMonth).toISOString();
      dispatch(fetchTasks({ dateFrom, dateTo }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

// BUTTON - clicked select task
const handleSelectTask = (e) => {
  e.preventDefault();
  
  const selectTaskId = tasks.filter(task => task._id === e.target.id);
  setTask(selectTaskId[0]);
  openModal();
}

  // MODAL WINDOW-------------------------------
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    // setColumn(e.target.id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  // Поточна дата
  const chackDay= (day) => {
    const dayForPut = new Date();

    console.log(dayForPut.getMonth());
    console.log(currentMonth);
    if (dayForPut.getMonth() === currentMonth) {
      if (dayForPut.getDate() === day) {
        return "day_grid-container-active";
      } else {
        if (dayForPut.getDate() < day) {
          return "day_grid-container";
        } else {
          return "day_grid-container-passed";
        }
        }
    }
    return "day_grid-container"; 
  }


// РЕНДЕР ТАБЛИЦІ Календаря
  for (let i = 0; i < emptyCells; i++) {
    calendarGrid.push(<div key={`empty-${i}`} className="empty-cell"></div>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = getDay(date);
    const isWeekend = dayOfWeek === 6 || dayOfWeek === 0;

    const tasksForDay = tasks.filter(task => {
      return isSameDay(new Date(task.date), date);
    });

    const tasksElements = tasksForDay.map(task => (
// TASK - for render
      <div key={task._id} 
           className={`task ${task.priority}-priority`} 
           id={task._id}
           onClick={handleSelectTask}>
        {task.title}
      </div>
    ));
    calendarGrid.push(
      <div
        key={`day-${day}`}
        className={`calendar-cell ${isWeekend ? 'weekend' : ''}`}
      >
        <div className="tasks-container">{tasksElements}</div>
        <div className={chackDay(day)} id={day}>{day}</div>
        
               

      </div>
    );
  }

  const weeks = [];
  let currentWeek = [];

  for (let i = 0; i < emptyCells + daysInMonth; i++) {
    if (i > 0 && i % 7 === 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentWeek.push(calendarGrid[i]);
  }

  weeks.push(currentWeek);

  const handleDayClick = day => {
    // !!!!!!! - DATE - зберігалась на один день назад. Поправила для тесту ------

    //!!! DATE переробив, щоб визначало саме ту дату, на яку клікнули (можна прив'язати лінк з переходом відразу на задачі вибраного дня)

    const clickedDate = new Date(currentYear, currentMonth, day);
    dispatch(changeSelectedDate(clickedDate));
  };

  return (
    <div className="calendar-grid">
      <table className="calendar-table">
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={`week-${weekIndex}`}>
              {week.map((day, dayIndex) => (
                <td
                  key={`day-${weekIndex}-${dayIndex}`}
                  className={day.props.className}
                  onClick={() => handleDayClick(parseInt(day.props.children))}
                >
                  <div className="calendar-cell-content">

                    <div className="calendar_grid-day">
                      <div>{day.props.children}</div>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {showModal && (
        <TaskModal
          // action={action}
          onClose={closeModal}
          column={''}
          id={''}
          taskToEdit={task}
        />
      )}





    </div>
  );
};