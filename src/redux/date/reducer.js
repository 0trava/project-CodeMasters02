import {SET_SELECTED_DATE , CHANGE_SELECTED_DATE} from './actions'


const initialState = {
  selectedDate: new Date().toISOString(),
  
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_SELECTED_DATE:
      console.log(action.payload.toISOString())
      return {
        ...state,
        selectedDate: action.payload.toISOString(),
      };
    default:
      return state;
  }
};

export const dateReducer = (state = initialState.selectedDate, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_DATE:
      const transformedDate = action.payload/*.toISOString()*/;     
      return transformedDate;
    default:
      return state;
  }
};
