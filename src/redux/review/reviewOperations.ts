import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';
import {
  IReview,
  IReviewApi,
  IReviewToSend,
} from '../../helpers/interfaces/reviewApiInterface/reviewApiInterface';

export const reviewsApi = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/tasks',
    prepareHeaders: (headers, { getState }) => {
      const token: string | null = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.delete('authorization');
      }
      return headers;
    },
  }),
  tagTypes: ['reviews'],
  endpoints: builder => ({
    fetchReviews: builder.query<IReview[] | [], null>({
      query: () => ({
        method: 'GET',
        url: `/`,
      }),
      transformResponse: (response: IReviewApi) => response.rewiew,
      providesTags: ['reviews'],
    }),
    addReview: builder.mutation<IReview, IReviewToSend>({
      query: review => ({
        method: 'POST',
        url: '/',
        body: review,
      }),

      invalidatesTags: ['reviews'],
    }),
  }),
});

export const { useAddReviewMutation, useFetchReviewsQuery } = reviewsApi;