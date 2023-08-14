// import { MainPage } from 'pages/MainPage/MainPage';
import './app.css';
import { AppRoutes } from './Routes/Routes';
import { HeaderWork } from './WORK-file/HeaderWork';

import { Suspense } from 'react';
import {  useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';


export const App = () => {
  

  const token = useSelector(selectToken);

// Перевірка що токен валідний
  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch, token]);



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
