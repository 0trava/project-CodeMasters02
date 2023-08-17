import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-codemasters02-backend.onrender.com/api';

export const fetchReviews = createAsyncThunk(
  'reviews/getReviews',
  async ( _, thunkAPI) => {
    try {
      const { data } = await axios.get(`/reviews`);
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
      const { data } = await axios.post('/reviews/own', review);
      return data;
    } catch (e) {
      return  thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReviews',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/reviews/own`);

      return data;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editReview = createAsyncThunk(
    'reviews/editReviews',
    async (review, thunkAPI) => {
      try {
        const { data } = await axios.patch(`/reviews/own`, review);
  
        return data;
      } catch (e) {
          thunkAPI.rejectWithValue(e.message);
      }
    }
  );

export const fetchReviewById = createAsyncThunk(
  'reviews/fetchReviewById',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/reviews/own`);
      return data;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
  }
);