export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
export const CHANGE_SELECTED_DATE = 'CHANGE_SELECTED_DATE';

export const setSelectedDate = (newDate) => ({
    type: SET_SELECTED_DATE,
    payload: newDate,
  });

  export const changeSelectedDate = (date) => ({
    type: CHANGE_SELECTED_DATE,
    payload: new Date(date),
  });