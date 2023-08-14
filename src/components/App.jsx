// import { MainPage } from 'pages/MainPage/MainPage';
import './app.css';
import { AppRoutes } from './Routes/Routes';
import { HeaderWork } from './WORK-file/HeaderWork';

import { Suspense } from 'react';
import { Loader } from './Loader/Loader-all';

export const App = () => {
  // useEffect(() => {

  // })

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
