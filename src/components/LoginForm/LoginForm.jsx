import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import css from './LoginForm.module.css';
import sprite from 'images/sprite.svg';
import { useDispatch } from "react-redux";
import { login } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "utils/routes";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
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
    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            email: { value: email },
            password: { value: password },
        } = e.currentTarget;
    
        dispatch(login({ email, password }));
        e.currentTarget.reset();
        navigate(ROUTES.HOME);
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
                                    <IoEyeOutline className="IoEyeOutline"/> 
                                    : <IoEyeOffOutline className="IoEyeOffOutline"/>}
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
                                <svg className={css.icon} width="18" height="18">
                                    <use href={sprite + '#icon-log-out-01'}></use>
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