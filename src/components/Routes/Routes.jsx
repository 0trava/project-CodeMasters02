import React from 'react';
import { Route, Routes } from "react-router-dom";
import {ROUTES} from '../../utils/routes';
import {PrivateRoute} from "./PrivateRoute";

import { MainPage } from 'pages/MainPage/MainPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { MainLayout } from 'pages/MainLayout/MainLayout';
import { AccountPage } from 'pages/MainLayout/AccountPage/AccountPage';
import { CalendarPage } from 'pages/MainLayout/CalendarPage/CalendarPage';
import { StatisticsPage } from 'pages/MainLayout/StatisticsPage/StatisticsPage';
import { NotFound } from 'pages/NotFound/NotFound';

export const AppRoutes = () => {

  const chackMainLogin = (value) => {
    if (value === true) {
      return (<MainLayout/>)
    } else {
      return (<MainPage/>)
    }
  };

  return (
      <Routes>
            <Route index element={chackMainLogin(true)}/>
            <Route path={ROUTES.LOGIN}  element={<LoginPage />} />
            <Route path={ROUTES.REGISTER}  element={<RegisterPage />} />
            <Route path={ROUTES.HOME} element={<PrivateRoute><MainLayout/></PrivateRoute>} >
                <Route path={ROUTES.ACCOUNT} element={<PrivateRoute><AccountPage /></PrivateRoute>} />
                <Route path={ROUTES.CALENDAR} element={<PrivateRoute><CalendarPage /></PrivateRoute>} />
                <Route path={ROUTES.STATISTICS} element={<PrivateRoute><StatisticsPage /></PrivateRoute>} />
            </Route>
            <Route path={ROUTES.NotFound}  element={<NotFound />} />

            <Route path={ROUTES.START} element={chackMainLogin(false)}/>

    
      </Routes>
  )
}
