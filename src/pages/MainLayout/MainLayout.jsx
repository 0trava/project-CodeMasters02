import React, { Suspense, useEffect } from 'react';
import { Outlet} from 'react-router-dom';

import { SideBarPage } from 'pages/SideBarPage/SideBarPage';
import './MainLayout.css';
import { Header } from 'components/Header/Header';
// import { ROUTES } from 'utils/routes';

export const MainLayout = () => {
  // const navigate = useNavigate();

  // Перевірка що токен валідний
  useEffect(() => {

    // navigate(ROUTES.CALENDAR)
    // eslint-disable-next-line
  }, []);

    
  return (
    <div className="MainLayout__container">
      <div>
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
