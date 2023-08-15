import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import css from './LoginForm.module.css';
import { useDispatch } from "react-redux";
import { login } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "utils/routes";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

import { FiAlertCircle } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

import { useState } from "react";


// eslint-disable-next-line
const emailRegExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

const LogInSchema = yup.object().shape({
    
    email: yup
        .string()
        .max(254)
        .matches(emailRegExpression, 'Invalid email address. The email address must contain the @ sign.')
        .required('Email is a required!')
        .email('Invalid email address. The email address must contain the @ sign.'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters.')
        .max(254, 'Password is too long')
        .required('Password is a required!'),
});

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [passVisible, setPasswordVisible] = useState(false)


// Change vibility for Password
const changeVisible = () => {
    const input = document.getElementById('password');
    if (passVisible) {
        setPasswordVisible(false);
        input.setAttribute('type','password');
    } else {
        setPasswordVisible(true);
        input.setAttribute('type','text');
    }
}
//----------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();
        const password = e.currentTarget.password.value;
        const email = e.currentTarget.email.value;

    if ( password || email) {
        const { payload } = await dispatch(login({ email, password }));
        if (
            payload === 'Request failed with status code 400' ||
            payload === 'Request failed with status code 401' ||
            payload === 'Request failed with status code 403' ||
            payload === 'Request failed with status code 500' ||
            payload === 'Request failed with status code 409'
          ) {
            return;
          } else  {
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
                            <Form 
                                className={css.form}
                                onSubmit={handleSubmit} 
                            >
                                <label 
                                    className={css.label}
                                    htmlFor="email"
                                >
                                <FiAlertCircle className={css.invalid_valid_icon}/>
                                <FiCheckCircle className={css.invalid_valid_icon}/>
                                Email
                                <Field 
                                    // type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    className={`${css.input} ${
                                        touched.email && errors.email
                                            ? css.error_input
                                            : touched.email && !errors.email
                                            ? css.success_input
                                            : ''
                                    }`}
                                />
                                {isValid('email') === 'is-valid' && <p className={css.valid_message}>Correct email!</p>}
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className={css.error_message}
                                />
                                </label>
                                <label 
                                    className={css.label}
                                    htmlFor="password"
                                >
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
                                <span></span>
                                <span type="button" onClick={changeVisible} className={css.togle}>
                                    {passVisible ? 
                                    <FiEye className="IoEyeOutline"/> 
                                    : <FiEyeOff className="IoEyeOffOutline"/>}
                                </span>
                                {isValid('password') === 'is-valid' && <p className={css.valid_message}>Correct password!</p>}
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className={css.error_message}
                                />
                                </label>
                                <button 
                                    className={css.button}
                                    type="submit">Log In
                                    <svg width="18" height="18">
                                        <use href=""></use>
                                    </svg>
                                    </button>
                            </Form>
                        )
                    }
                }
            </Formik>
            </div>
        </div>
    )
};