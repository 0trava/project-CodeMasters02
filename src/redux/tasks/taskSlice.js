import { createSlice } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  editTask,
  fetchTasks,
  getStatistics,
} from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    taskStatictics: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = state.tasks.filter(task => task._id !== action.payload);
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(editTask.pending, handlePending)
      .addCase(editTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = state.tasks.map(task => {
          if (task._id === action.payload._id) {
            return action.payload;
          }
          return task;
        });
      })
      .addCase(editTask.rejected, handleRejected)
      .addCase(getStatistics.pending, handlePending)
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.taskStatictics = action.payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
