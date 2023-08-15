// import { MainPage } from 'pages/MainPage/MainPage';
import { refresh } from 'redux/auth/operations';
import './app.css';
import { AppRoutes } from './Routes/Routes';
import { HeaderWork } from './WORK-file/HeaderWork';

import React, { useState, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';

import { selectToken } from 'redux/auth/selectors';


export const App = () => {
let [loading, setLoading] = useState(false);
useEffect(() => {
  setLoading(true);
  setTimeout(() => {
  setLoading(false);
  }, 1500);
}, []);

 const dispatch = useDispatch() 
  
 const token = useSelector(selectToken);

// Перевірка що токен валідний
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch, token]);



  return (
    <>
      {loading ? (
        <div class="loader">
          <BeatLoader color={'#3E85F3'} loading={loading} size={30} />
        </div>
      ) : (
        <HeaderWork />
      )}
      <AppRoutes />
      {/* <MainPage/> */}
    </>
  );
};
