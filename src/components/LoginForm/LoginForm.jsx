import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login, loginGoogle } from 'redux/auth/operations';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import sprite from 'images/sprite.svg';
import { FiAlertCircle } from 'react-icons/fi';
import { FiCheckCircle } from 'react-icons/fi';
import { ReactComponent as Google } from 'images/google.svg';

import { useEffect, useState } from 'react';

// eslint-disable-next-line
const emailRegExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const LogInSchema = yup.object().shape({
  email: yup
    .string()
    .max(254)
    .matches(
      emailRegExpression,
      'Invalid email address. The email address must contain the @ sign.'
    )
    .required('Email is a required!')
    .email('Invalid email address. The email address must contain the @ sign.'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .max(254, 'Password is too long')
    .required('Password is a required!'),
});

export default function LoginForm() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passVisible, setPasswordVisible] = useState(false);

  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      dispatch(loginGoogle({ token }));
    }
  }, [token, dispatch, navigate]);

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
  //----------------------------
  const handleSubmit = async e => {
    e.preventDefault();
    const password = e.currentTarget.password.value;
    const email = e.currentTarget.email.value;

    if (password || email) {
      const { payload } = await dispatch(login({ email, password }));
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

  return (
    <div className={css.login_container}>
      <div className={css.container}>
        <h1 className={css.title}>Log In</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LogInSchema}
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
                <label className={css.label} htmlFor="email">
                  Email
                  <Field
                    // type="email"
                    name="email"
                    id="email"
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
                    Log In
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
