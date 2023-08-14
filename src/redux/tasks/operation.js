import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const privateApi = axios.create({
  baseURL: 'https://project-codemasters02-backend.onrender.com',
});

// GET @ /tasks
export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (params, thunkAPI) => {
    try {
      const { data } = await privateApi.get('/api/tasks', {
        params: params.period,
        signal: params.signal,
      });
      Notify.success(`Welcome, all your tasks.`);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /tasks
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const { data } = await privateApi.post('/api/tasks', task);
      Notify.success(`Task added.`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// PATCH @ /tasks/:id
export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (data, thunkAPI) => {
    const { _id, start, end, priority, title, category, date, description } =
      data;
    try {
      const { data } = await privateApi.patch(`/api/tasks/${_id}`, {
        start,
        end,
        priority,
        title,
        date,
        category,
        description,
      });
      Notify.success(`The task has been corrected.`);
      return data.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// DELETE @ /tasks/:id
export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      const { data } = await privateApi.delete(`/tasks/${id}`);
      Notify.success(`The task has been deleted.`);
      return data.data.result._id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
