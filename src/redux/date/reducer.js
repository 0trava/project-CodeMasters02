import { SET_SELECTED_DATE } from './actions';
const initialState = {
  selectedDate: new Date().toISOString(),
 
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload.toISOString(),
      };
    default:
      return state;
  }
};