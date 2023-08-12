import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ITask,
  ITaskApi,
} from '../../helpers/interfaces/taskApiInterface/taskApiInterface';
import { RootState } from '../store';

export const tasksApi = createApi({
  reducerPath: 'tasks',
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
  tagTypes: ['tasks'],
  endpoints: builder => ({
    fetchTasks: builder.query<ITask[] | [], null>({
      query: () => ({
        method: 'GET',
        url: `/`,
      }),
      transformResponse: (response: ITaskApi) => response.tasks,
      providesTags: ['tasks'],
    }),
    addTasks: builder.mutation<any, any>({
      query: task => ({
        method: 'POST',
        url: '/',
        body: task,
      }),

      invalidatesTags: ['tasks'],
    }),
    updateTasks: builder.mutation<any, any>({
      query: updateInfo => ({
        method: 'PATCH',
        url: `/${updateInfo._id}`,
        body: updateInfo,
      }),

      invalidatesTags: ['tasks'],
    }),
    removeTasks: builder.mutation<any, any>({
      query: id => ({
        method: 'DELETE',
        url: `/${id}`,
      }),

      invalidatesTags: ['tasks'],
    }),
  }),
});

export const {
  useFetchTasksQuery,
  useAddTasksMutation,
  useRemoveTasksMutation,
  useUpdateTasksMutation,
} = tasksApi;