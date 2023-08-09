// import { MainPage } from 'pages/MainPage/MainPage';
import { NotFound } from 'pages/NotFound/NotFound';
import './app.css';
import { AppRoutes  } from './Routes/Routes';
import { HeaderWork } from './WORK-file/HeaderWork';


export const App = () => {
  return (
    <>
      <HeaderWork/>
      <AppRoutes />
      {/* <MainPage/> */}
      <NotFound/>
      </>
  );
};
