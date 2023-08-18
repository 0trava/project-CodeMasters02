import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import css from './LoginPage.module.css'
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import { TaskForm } from 'components/TaskForm/TaskForm';

export const LoginPage = () => {
  return (
    <div className={css.login_page} >
      <TaskForm />
      <LoginForm />
      <AuthNavigate route={'/register'} pageName={'Sign up'} />
    </div>
  )
};
