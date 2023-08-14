import { createSlice, createAction } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, editTask } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfiled = state => {
  state.isLoading = false;
  state.error = null;
};

export const tasksInitState = {
  tasks: [],
  savedPeriods: [],
  activeDate: null,
  isLoading: false,
  error: null,
};

export const setActiveDateStore = createAction('setActiveDate');

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitState,
  reducers: {
    resetTasksState() {
      return tasksInitState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        handleFulfiled(state);
        state.tasks = payload.result.reduce((arr, task) => {
          if (!arr.some(taskArr => task._id === taskArr._id)) {
            arr.push(task);
          };
          return arr;
        }, [...state.tasks]);
        state.savedPeriods.push(payload.start);
      })
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.rejected, handleRejected)
      .addCase(addTask.fulfilled, (state, { payload }) => {
        handleFulfiled(state);
        state.tasks.push(payload.data.result);
      })
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        handleFulfiled(state);
        state.tasks = state.tasks.filter(task => task._id !== payload);
      })
      .addCase(editTask.pending, handlePending)
      .addCase(editTask.rejected, handleRejected)
      .addCase(editTask.fulfilled, (state, { payload }) => {
        handleFulfiled(state);
        const index = state.tasks.findIndex(task => task._id === payload._id);
        state.tasks[index] = payload;
      })
      .addCase(setActiveDateStore, (state, {payload}) => {
        state.activeDate = payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { resetTasksState } = tasksSlice.actions;
