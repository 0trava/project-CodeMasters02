// import { MainPage } from 'pages/MainPage/MainPage';
import { refresh } from 'redux/auth/operations';
import './app.css';
import { AppRoutes } from './Routes/Routes';

import React, { useState, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';

import { selectToken } from 'redux/auth/selectors';
import { fetchReviewById, fetchReviews} from 'redux/reviews/operations';
// import { fetchTasks } from 'redux/tasks/operation';

export const App = () => {
  const dispatch = useDispatch() 
  const token = useSelector(selectToken);

let [loading, setLoading] = useState(false);
useEffect(() => {
  setLoading(true);
  setTimeout(() => {
  setLoading(false);
  dispatch(fetchReviews());
  }, 1000);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


// Перевірка що токен валідний
  useEffect(() => {
    dispatch(refresh());
    dispatch(fetchReviewById());
  }, [dispatch, token]);


  return (
    <>
      {loading ? (
        <div className="loader">
          <BeatLoader color={'#3E85F3'} loading={loading} size={30} />
        </div>
      ) : (
        ""
      )}
      <AppRoutes />
    </>
  );
};
