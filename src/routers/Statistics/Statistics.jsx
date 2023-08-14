import React from 'react';
import PeriodPaginator from '../../components/PeriodPaginator/PeriodPaginator';
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart';

const StatisticsPage = () => {
  // Тут ми можемо використовувати реальні дані, які будуть надходити до нашого проекту
  const statisticsData = [
    { date: '2023-08-01', value: 10 },
    { date: '2023-08-02', value: 15 },
    // Додаємо наші дані тут
  ];

  return (
    <div>
      <h1>Сторінка статистики</h1>
      <PeriodPaginator />
      <StatisticsChart data={statisticsData} /> {/* Передаємо дані */}
    </div>
  );
};

export default StatisticsPage;
