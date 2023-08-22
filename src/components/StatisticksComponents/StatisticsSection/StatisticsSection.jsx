import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StaticticsToolbar } from '../StaticticsToolbar/StaticticsToolbar';
import { StatisticsCalendar } from '../StatisticsCalendar/StatisticsCalendar';
import { StatisticsChart } from '../StatisticsChart/StatisticsChart';
import { format, addDays } from 'date-fns';
import './StatisticsSection.css';
import sprite from '../../../images/sprite.svg';
import { selectStatistics } from 'redux/tasks/selectors';
import { getStatistics } from 'redux/tasks/operation';
import { selectToken } from 'redux/auth/selectors';

export const StatisticsSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const dispatch = useDispatch();
  const statistics = useSelector(selectStatistics);
  const userIsLogin = useSelector(selectToken);

  useEffect(() => {
    if (userIsLogin && selectedDate) {
      const dateForStatistics = format(selectedDate, 'yyyy-MM-dd');
      dispatch(getStatistics({ date: dateForStatistics }));
    }
  }, [dispatch, userIsLogin, selectedDate]);

  //console.log(statistics);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const changeDate = amount => {
    setSelectedDate(addDays(selectedDate, amount));
    setIsCalendarOpen(false);
  };

  const formattedDate = format(selectedDate, 'd MMMM yyyy').toUpperCase();

  const handleDateChange = date => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const dataWithPercentageSymbol = statistics?.map(entry => ({
    ...entry,
    dayPercentage: `${entry.day}%`,
    monthPercentage: `${entry.month}%`,
  }));
  //console.log(dataWithPercentageSymbol);

  return (
    <section className="statisticsContainer">
      <div className="headWrapper">
        <StaticticsToolbar
          changeDate={changeDate}
          selectedDate={formattedDate}
          toggleCalendar={toggleCalendar}
        />
        {isCalendarOpen && (
          <StatisticsCalendar
            selected={selectedDate}
            onChange={handleDateChange}
          />
        )}
        <div className="periodWrapper">
          <p className="period">
            <svg className="iconEllipse" fill="#ffd2dd">
              <use href={`${sprite}#icon-Ellipse`} />
            </svg>
            By Day
          </p>
          <p className="period">
            <svg className="iconEllipse" fill="#3E85F3">
              <use href={`${sprite}#icon-Ellipse`} />
            </svg>
            By Month
          </p>
        </div>
      </div>
      <div className="chartContainer">
        {statistics && <StatisticsChart data={dataWithPercentageSymbol} />}
      </div>
    </section>
  );
};
