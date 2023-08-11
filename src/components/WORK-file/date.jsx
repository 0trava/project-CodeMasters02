
import React, { useState } from 'react';
import { startOfMonth, endOfMonth, endOfWeek, eachDayOfInterval, startOfWeek } from 'date-fns'
import { getDates } from 'calendar-dates';
import DatePicker from "react-datepicker";

const currentDate = new Date(); 
const datesArray = getDates(currentDate);

const startOfModifiedWeek = startOfWeek(currentDate, { weekStartsOn: 1 });// Зміна першого дня тижня на понеділок
const endOfModifiedWeek = endOfWeek(currentDate, { weekStartsOn: 1 });

const CustomDateFormat =() => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        withPortal
      />
    );
  };
console.log('Dates array with metadata:', datesArray);
console.log('Start of current week:', startOfModifiedWeek);
console.log('End of current week:', endOfModifiedWeek);