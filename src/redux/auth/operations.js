import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://project-codemasters02-backend.onrender.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/auth/register', credentials);
      setToken(response.data.token);
      Notify.success(`Welcome!!!`);
      return response.data;
    } catch (error) {
      Notify.failure(`This email is already in use`);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('api/auth/login', credentials);
      setToken(response.data.token);
      Notify.success(`Welcome back!!!`);
      return response.data;
    } catch (error) {
      Notify.failure(`Login failed. Try again`);
      return rejectWithValue(error.message);
    }
  }
);


export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    // const { token } = getState().auth;
    // console.log(token);
    console.log("+++");
    console.log(axios.defaults.headers.common.Authorization);

    try {
      await axios.post('api/auth/logout');
      clearToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const refresh = createAsyncThunk(
  'auth/refresh/fetchCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().auth;
    if (!token) {
      return rejectWithValue('Oooops... Cannot refresh user');
    }
    try {
      // setToken(token);
      const { data } = await axios.get('api/auth/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('api/auth/update', credentials);
      Notify.success(`Your profile has been updated`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);