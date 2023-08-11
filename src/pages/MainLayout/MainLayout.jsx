import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBarPage } from 'pages/SideBarPage/SideBarPage';
import './MainLayout.css';
/*
import
{
  Navigation,
  Block, LogoBlock, LogoText, Text, PanelText,
  PageBlock, PagePanel, PageSideBar, PageSideBarText,
  Button, ButtonText,
  FeedbackBlock, ButtonFeedbackText, AvatarUsers
}
from './MainLayout.styled';
*/
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
