import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './RegisterForm.module.css';
import sprite from 'images/sprite.svg';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import { useState } from 'react';

import { FiAlertCircle } from 'react-icons/fi';
import { FiCheckCircle } from 'react-icons/fi';
import { ReactComponent as Google } from 'images/google.svg';
// eslint-disable-next-line
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .max(16, 'Name must be 16 characters or less.')
    .required('Name is required!'),
  email: yup
    .string()
    .max(254)
    .matches(
      emailRegExp,
      'Invalid email address. The email address must contain the @ sign.'
    )
    .required('Email is required!')
    .email('Invalid email address. The email address must contain the @ sign.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .max(254, 'Password is too long')
    .required('Password is required!'),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passVisible, setPasswordVisible] = useState(false);
  //   const [searchParams, setSearchParams] = useSearchParams();

  //   const token = searchParams.get('token');

  // Change vibility for Password
  const changeVisible = () => {
    const input = document.getElementById('password');
    if (passVisible) {
      setPasswordVisible(false);
      input.setAttribute('type', 'password');
    } else {
      setPasswordVisible(true);
      input.setAttribute('type', 'text');
    }
  };

  // ВІДПРАВКА ФОРМИ -------------

  const handleSubmit = async e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const password = e.currentTarget.password.value;
    const email = e.currentTarget.email.value;
    // Перевірка що всі поля заповненні

    if (name || password || email) {
      const { payload } = await dispatch(register({ name, email, password }));
      if (
        payload === 'Request failed with status code 400' ||
        payload === 'Request failed with status code 401' ||
        payload === 'Request failed with status code 403' ||
        payload === 'Request failed with status code 500' ||
        payload === 'Request failed with status code 409'
      ) {
        return;
      } else {
        localStorage.setItem('firstLoad', 'true');
        navigate(ROUTES.HOME);
      }
    } else {
      return;
    }
  };
  // ------------------------------

  return (
    <div className={css.register_container}>
      <div className={css.container}>
        <h1 className={css.title}>Sign Up</h1>
        <Formik
          validationSchema={SignUpSchema}
          initialValues={{ name: '', email: '', password: '' }}
        >
          {({ errors, touched }) => {
            const isValid = field =>
              touched[field] && errors[field]
                ? 'is-invalid'
                : touched[field]
                ? 'is-valid'
                : '';
            return (
              <Form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label} htmlFor="name">
                  Name
                  <Field
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className={`${css.input} ${
                      touched.name && errors.name
                        ? css.error_input
                        : touched.name && !errors.name
                        ? css.success_input
                        : ''
                    }`}
                  />
                  {isValid('name') === 'is-valid' && (
                    <FiCheckCircle className={css.valid_icon} />
                  )}
                  {isValid('name') === 'is-invalid' && (
                    <FiAlertCircle className={css.invalid_icon} />
                  )}
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.error_message}
                  />
                </label>
                <label className={css.label} htmlFor="email">
                  Email
                  <Field
                    // type="email"
                    name="email"
                    required
                    placeholder="Enter email"
                    className={`${css.input} ${
                      touched.email && errors.email
                        ? css.error_input
                        : touched.email && !errors.email
                        ? css.success_input
                        : ''
                    }`}
                  />
                  {isValid('email') === 'is-valid' && (
                    <FiCheckCircle className={css.valid_icon} />
                  )}
                  {isValid('email') === 'is-invalid' && (
                    <FiAlertCircle className={css.invalid_icon} />
                  )}
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.error_message}
                  />
                </label>
                <label className={css.label} htmlFor="password">
                  Password
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Enter password"
                    className={`${css.input} ${
                      touched.password && errors.password
                        ? css.error_input
                        : touched.password && !errors.password
                        ? css.success_input
                        : ''
                    }`}
                  />
                  {/* Icon for password (visible or not) */}
                  <span type="button" onClick={changeVisible}>
                    {passVisible ? (
                      <FiEye className={css.togle} />
                    ) : (
                      <FiEyeOff className={css.togle} />
                    )}
                  </span>
                  {isValid('password') === 'is-valid' && (
                    <FiCheckCircle className={css.valid_icon} />
                  )}
                  {isValid('password') === 'is-invalid' && (
                    <FiAlertCircle className={css.invalid_icon} />
                  )}
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={css.error_message}
                  />
                </label>
                <div className={css.button_container}>
                  <button className={css.button} type="submit">
                    Sign Up
                    <svg className={css.icon}>
                      <use href={sprite + '#icon-log-in'}></use>
                    </svg>
                  </button>
                  <a
                    href={
                      'https://project-codemasters02-backend.onrender.com/api/auth/google'
                    }
                    className={css.button_google}
                  >
                    <Google width="34" height="34" />
                    Continue with Google
                  </a>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
