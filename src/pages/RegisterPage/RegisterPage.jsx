import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css'
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';


export const RegisterPage = () => {
  return (
    <div className={css.register_page}>
      <RegisterForm />
      <AuthNavigate route={'/login'} pageName={'Log In'} />
    </div>
  )
}

