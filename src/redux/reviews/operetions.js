import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-codemasters02-backend.onrender.com';

export const fetchReviews = createAsyncThunk(
  'reviews/getReviews',
  async ({page, limit}, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/reviews?page=${page}&limit=4${limit}`);

      return data;
    } catch (e) {
      return  thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReviews',
  async (review, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/reviews', review);
      return data;
    } catch (e) {
      return  thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReviews',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/reviews/${id}`);

      return data;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editReview = createAsyncThunk(
    'reviews/editReviews',
    async ({id, review}, thunkAPI) => {
      try {
        const { data } = await axios.patch(`/api/reviews/${id}`, review);
  
        return data;
      } catch (e) {
          thunkAPI.rejectWithValue(e.message);
      }
    }
  );

export const fetchReviewById = createAsyncThunk(
  'reviews/fetchReviewById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/reviews/${id}`);
      return data;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);