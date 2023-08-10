import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
    const handleSubmit = (values, actions) => {
        console.log(values);
        console.log(actions);
    };

    const SignupSchema = yup.object().shape({
        name: yup
            .string()
            .required('Name is a required'),
        email: yup
            .string()
            .required('Email is a required')
            .email('Invalid email address. The email address must contain the @ sign'),
        password: yup
            .string()
            .required('Password is a required')
            .min(6, 'Password must be at least 6 characters'),
    });

    return (
    <div className={css.container}>
        <h1 className={css.title}>Sign Up</h1>
        <Formik 
            initialValues={{
                name: '',
                email: '', 
                password: '' 
            }}
            validationSchema={SignupSchema}   
            onSubmit={handleSubmit} 
        >
            <Form className={css.form}>
                <label 
                    className={css.label}
                    htmlFor="name"
                >
                Name
                    <Field
                        className={css.input} 
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                    />
                    <ErrorMessage
                        name="name"
                        className={css.error_message}
                    />
                </label>
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
                    <ErrorMessage
                        name="email"
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
                    <ErrorMessage
                        name="password"
                        className={css.error_message}
                    />
                </label>
                <button 
                    className={css.button}
                    type="submit">Sign Up
                    <svg width="18" height="18">
                        <use href=""></use>
                    </svg>
                </button>
            </Form>
        </Formik>
    </div>
)};