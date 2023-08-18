import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './StatisticsCalendar.css';

import { registerLocale } from 'react-datepicker';
import enUS from 'date-fns/locale/en-US';

registerLocale('en-US', enUS);

export const StatisticsCalendar = ({ onChange, selected }) => {
  const highlightedDates = [selected];

  const formatWeekDay = weekdayShort => {
    return weekdayShort.charAt(0);
  };

  return (
    <>
      <DatePicker
        className="datePicker"
        selected={selected}
        onChange={onChange}
        open={true}
        highlightDates={highlightedDates}
        formatWeekDay={formatWeekDay}
        locale="en-US"
        calendarStartDay={1}
        showOtherMonths={true}
      />
    </>
  );
};
