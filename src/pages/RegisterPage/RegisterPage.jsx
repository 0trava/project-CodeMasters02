import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css'

export const RegisterPage = () => {
  return (
    <div className={css.register_page}>
      <RegisterForm />
    </div>
  )
}

