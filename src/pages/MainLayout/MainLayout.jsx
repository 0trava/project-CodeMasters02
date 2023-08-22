import React, { Suspense, useEffect } from 'react';
import { Outlet, useNavigate} from 'react-router-dom';

import { SideBarPage } from 'pages/SideBarPage/SideBarPage';
import './MainLayout.css';
import { Header } from 'components/Header/Header';
// import { ROUTES } from 'utils/routes';
import { useSelector } from 'react-redux';


export const MainLayout = () => {
  const navigate = useNavigate();
  const isFirstLoad = localStorage.getItem('firstLoad');
  const getDate = useSelector(state => state.date);
  const dateObject = new Date(getDate);
  const transformedDateString = dateObject.toISOString().split('T')[0];

  // Перевірка що перший раз входить
  useEffect(() => {
     if (isFirstLoad === "true") {
      const ROUT = `calendar/month/${transformedDateString}`
      navigate(ROUT);
      localStorage.setItem('firstLoad', 'false');
     } 

     return;
    // eslint-disable-next-line
    }, [])

  

    
  return (
    <div className="MainLayout__container">
      <div className='MainLayout__afterbox'>
        <aside className="MainLayout__navigation">
          <nav>
            <SideBarPage></SideBarPage>
          </nav>
        </aside>
      </div>
      <div className='MainLayout__block'>
        <Header />
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
      </div>
    </div>
  );
};
