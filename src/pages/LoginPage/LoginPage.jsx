import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import css from './LoginPage.module.css'

export const LoginPage = () => {
  return (
    <div className={css.login_page} >
      <LoginForm />
    </div>
  )
};
