export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
export const CHANGE_SELECTED_DATE = 'CHANGE_SELECTED_DATE';

export const setSelectedDate = (newDate) => ({
    type: SET_SELECTED_DATE,
    payload: newDate,
  });

export const changeSelectedDate = (date) => {
  const selectedDate = new Date(date);
  const serializableDate = selectedDate.toISOString();
  return ({
    type: CHANGE_SELECTED_DATE,
    payload: serializableDate,
  })
};
  