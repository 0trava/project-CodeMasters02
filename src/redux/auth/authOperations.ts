import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
  ICredentials,
  IAuth,
} from '../../helpers/interfaces/auth/authInterfaces';
import { selectToken } from './authSelectors';
import { RootState } from '../store';

axios.defaults.baseURL = 'http://localhost:3000/api/tasks';

const setAuthHeader = (token: String): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk<
  IAuth,
  ICredentials,
  {
    rejectValue: string;
  }
>('auth/signUp', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post<IAuth>('/auth/register', credentials);
    setAuthHeader(data.dataUser.token);
    return data;
  } catch (error: any) {
    if (error.response.data.message === 'Email in use') {
      localStorage.getItem('i18nextLng') === 'en'
        ? toast.error('This mail is already in use')
        : toast.error('Ця пошта вже використовується');
    }

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signIn = createAsyncThunk<
  IAuth,
  ICredentials,
  {
    rejectValue: string;
  }
>('auth/signIn', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post<IAuth>('/auth/login', credentials);
    setAuthHeader(data.dataUser.token);
    return data;
  } catch (error: any) {
    if (error.response.status === 401 || error.response.status === 500) {
      localStorage.getItem('i18nextLng') === 'en'
        ? toast.error('incorrect data entered')
        : toast.error('Користувач з такими даними не зареєстрован');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const signInWithToken = createAsyncThunk<
  IAuth,
  { token: string },
  {
    rejectValue: string;
  }
>('auth/signInWithToken', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post<IAuth>(
      '/auth/login/with-token',
      credentials
    );
    setAuthHeader(data.dataUser.token);
    return data;
  } catch (error: any) {
    if (error.response.status === 401 || error.response.status === 500) {
      localStorage.getItem('i18nextLng') === 'en'
        ? toast.error('incorrect data entered')
        : toast.error('Користувач з такими даними не зареєстрован');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const token = selectToken(thunkAPI.getState() as RootState);

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const { data } = await axios.get<IAuth>('/user/current');
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateInfo = createAsyncThunk<
  IAuth,
  ICredentials,
  {
    rejectValue: string;
  }
>('user/update', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.patch<IAuth>('/user/info', credentials);

    localStorage.getItem('i18nextLng') === 'en'
      ? toast.success('User data updated')
      : toast.success('Дані оновлено');

    return data;
  } catch (error: any) {
    localStorage.getItem('i18nextLng') === 'en'
      ? toast.error('Oops, something went wrong')
      : toast.error('Ой, щось тут не так');
    return thunkAPI.rejectWithValue(error.message);
  }
});