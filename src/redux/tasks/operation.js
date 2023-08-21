import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://project-codemasters02-backend.onrender.com/api/';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (params, { rejectWithValue }) => {
    try {
      // console.log(axios.defaults.headers.common.Authorization);
      const response = await axios.get(`tasks`, {
        params: {
          dateFrom: params.dateFrom,
          dateTo: params.dateTo,
        },
      });

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, { rejectWithValue }) => {
    try {

      const { data } = await axios.post('tasks', task);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, { rejectWithValue }) => {
    try {

      const { data } = await axios.delete(`tasks/${taskId}`);
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (
    { _id, title, start, end, priority, date, category },
    { rejectWithValue }
  ) => {
    try {
      
      const { data } = await axios.patch(`tasks/${_id}`, {
        title,
        start,
        end,
        priority,
        date,
        category,
      });
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getStatistics = createAsyncThunk(
  'tasks/getStatistics',
  async (date, { rejectWithValue }) => {
    try {
      const data = await axios.get('tasks/statistics', { date });
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
