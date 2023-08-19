import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authSlice } from './auth/authSlice';
import { reviewReducer } from './reviews/reviewSlice';
// import { statisticsReducer } from './statistics/statisticsSlice';
import { tasksReducer } from './tasks/taskSlice';
import {calendarReducer, dateReducer } from './date/reducer'


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    reviews: reviewReducer,
    // statistics: statisticsReducer,
    tasks: tasksReducer,
    calendar: calendarReducer,
    date: dateReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
