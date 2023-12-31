import '../../../pages/MainLayout/CalendarPage/CalendarToolbar/PeriodPaginator/PeriodPaginator.css';
import sprite from '../../../images/sprite.svg';

export const StaticticsToolbar = ({
  changeDate,
  selectedDate,
  toggleCalendar,
}) => {
  return (
    <div className="dateWrapper">
      <div className="currentDate currentDatePointer" onClick={toggleCalendar}>
        {selectedDate}
      </div>
      <div>
        <button className="chevronLeftBtn" onClick={() => changeDate(-1)}>
          <svg className="icon-chevron" width="16" height="16">
            <use href={sprite + '#icon-chevron-left'}></use>
          </svg>
        </button>
        <button className="chevronRightBtn" onClick={() => changeDate(1)}>
          <svg className="icon-chevron" width="16" height="16">
            <use href={sprite + '#icon-chevron-right'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
