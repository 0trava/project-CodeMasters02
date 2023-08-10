import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBarPage } from 'pages/SideBarPage/SideBarPage';
import css from './MainLayout.module.css';
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
    <>
      <header className={css.header}>
        <aside className={css.navigation}>
          <nav>
            <SideBarPage></SideBarPage>
          </nav>
        </aside>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet/>
      </Suspense>
    </>
  )
}
