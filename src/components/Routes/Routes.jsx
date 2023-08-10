import React from 'react';
import { Route, Routes } from "react-router-dom";
import {ROUTES} from '../../utils/routes';

import { MainPage } from 'pages/MainPage/MainPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { MainLayout } from 'pages/MainLayout/MainLayout';
import { AccountPage } from 'pages/MainLayout/AccountPage/AccountPage';
import { CalendarPage } from 'pages/MainLayout/CalendarPage/CalendarPage';
import { StatisticsPage } from 'pages/MainLayout/StatisticsPage/StatisticsPage';
import { NotFound } from 'pages/NotFound/NotFound';

export const AppRoutes = () => {
  return (
      <Routes>
            <Route index element={<MainPage />}/>
            <Route path={ROUTES.LOGIN}  index element={<LoginPage />} />
            <Route path={ROUTES.REGISTER}  index element={<RegisterPage />} />
            <Route path={ROUTES.HOME}  element={<MainLayout />} >
                <Route path="account" index element={<AccountPage />} />
                <Route path="calendar" index element={<CalendarPage />} />
                <Route path="statistics" index element={<StatisticsPage />} />
            </Route>
            <Route path={ROUTES.NotFound}  element={<NotFound />} />
    
      </Routes>
  )
}
