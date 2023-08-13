import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToggleTheme } from 'components/ToggleTheme/ToggleTheme';
import { FeedbackBtn } from 'components/Header/FeedbackBtn';
import { SideBarPage } from 'pages/SideBarPage/SideBarPage';
import './MainLayout.css';

export const MainLayout = () => {
  return (
    <div className="MainLayout__container">
      <header className="">
        <aside className="MainLayout__navigation">
          <nav>
            <SideBarPage></SideBarPage>
          </nav>
        </aside>
      </header>
      <div>
       <div className="MainLayout__header">
        {/* Header */}
        <FeedbackBtn></FeedbackBtn>
        <ToggleTheme></ToggleTheme>
      </div>
      <div className="MainLayout__block" >
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet/>
      </Suspense>        
      </div>

      </div>

    </div>
  )
}
