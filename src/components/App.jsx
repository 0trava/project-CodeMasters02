// import { MainPage } from 'pages/MainPage/MainPage';
import { refresh } from 'redux/auth/operations';
import './app.css';
import { Loader } from './Loader/Loader';
import { AppRoutes } from './Routes/Routes';
import { HeaderWork } from './WORK-file/HeaderWork';

import { Suspense, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';


export const App = () => {
 const dispatch = useDispatch() 
  

  const token = useSelector(selectToken);

// Перевірка що токен валідний
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch, token]);



  return (
    <>
      <Suspense fallback={<Loader />}>
        <HeaderWork />
        <AppRoutes />
        {/* <MainPage/> */}
      </Suspense>
    </>
  );
};
