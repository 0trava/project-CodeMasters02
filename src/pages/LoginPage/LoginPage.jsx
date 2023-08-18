import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import css from './LoginPage.module.css'
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';

export const LoginPage = () => {
  return (
    <div className={css.login_page} >
      <LoginForm />
      <AuthNavigate route={'/register'} pageName={'Sign up'} />
    </div>
  )
};
