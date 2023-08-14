import React from 'react';
import CalendarToolbar from './CalendarToolbar';
import './periodPaginator.css'; // Тут я підключаю стилі для цього компонента

const PeriodPaginator = () => {
  return (
    <div>
      <h2>Компонент періодичного пагінатора</h2>
      <CalendarToolbar />
      {/* Додайте ваші елементи інтерфейсу пагінатора тут */}
    </div>
  );
};

export default PeriodPaginator;
