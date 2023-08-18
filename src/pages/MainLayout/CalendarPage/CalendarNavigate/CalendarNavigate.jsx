import { format } from 'date-fns';

import { Navigate } from 'react-router-dom';

export const CalendarNavigate = () => {
  // TEST!!!!

  const currentDate = format(Date.now(), 'yyyy-MM-dd');

  // TEST!!!!

  return <Navigate to={`month/${currentDate}`} />;
};
