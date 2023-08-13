import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import css from './LoginForm.module.css';
import { useDispatch } from "react-redux";
import { login } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "utils/routes";

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
                                    className={css.input} 
                                    // type="email"
                                    name="email"
                                    placeholder="Enter email"
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
                                    className={css.input} 
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                />
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