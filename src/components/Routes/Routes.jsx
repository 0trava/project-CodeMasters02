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
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/selectors';

export const AppRoutes = () => {
  // eslint-disable-next-line
  const userIsLogin = useSelector(selectToken);


  const chackMainLogin = (value) => {
    if (!value) {
      return (<MainPage/>)
    } else {
      return (<MainLayout/>)
    }
  };

  return (
      <Routes>
            <Route index element={chackMainLogin(userIsLogin)}/>
            <Route path={ROUTES.LOGIN}  element={<LoginPage />} />
            <Route path={ROUTES.REGISTER}  element={<RegisterPage />} />
            <Route path={ROUTES.HOME} element={chackMainLogin(userIsLogin)} >
                <Route path={ROUTES.ACCOUNT} element={<PrivateRoute><AccountPage /></PrivateRoute>} />
                <Route path={ROUTES.CALENDAR} index element={<PrivateRoute><CalendarPage /></PrivateRoute>} />
                <Route path={ROUTES.STATISTICS} element={<PrivateRoute><StatisticsPage /></PrivateRoute>} />
            </Route>
            <Route path={ROUTES.NotFound}  element={<NotFound />} />

      </Routes>
  )
}
