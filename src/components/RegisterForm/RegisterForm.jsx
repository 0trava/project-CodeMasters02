import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
    // const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        console.log(values);
        console.log(actions);
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const {
    //         name: { value: name },
    //         email: { value: email },
    //         password: { value: password },
    //     } = e.currentTarget;
    
    //     dispatch(register({ name, email, password }));
    //     e.currentTarget.reset();
    // };

    // eslint-disable-next-line
    const emailRegExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

    const initialValues = {
        name: '',
        email: '', 
        password: '' 
    };
    
    const SignUpSchema = yup.object().shape({
        name: yup
            .string()
            .max(16, 'Name must be 16 characters or less.')
            .required('Name is a required!'),
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

    return (
    <div className={css.register_container}>
        <div className={css.container}>
        <h1 className={css.title}>Sign Up</h1>
        <Formik 
            initialValues={initialValues}
            validationSchema={SignUpSchema}   
            onSubmit={handleSubmit} 
        >
            {({ errors, touched }) => {
                const isValid = field =>
                    touched[field] && errors[field]
                        ? 'is-invalid'
                        : touched[field]
                        ? 'is-valid'
                        : '';
                        return (
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
                                {isValid('name') === 'is-valid' && <p className={css.valid_message}>Correct name!</p>}
                                <ErrorMessage
                                    name="name"
                                    component="div"
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
                                type="submit">Sign Up
                                <svg width="18" height="18">
                                    <use href="../../images/sprite.svg#icon-log-in"></use>
                                </svg>
                            </button>
                        </Form>
                    )
                }
            }
        </Formik>
        </div>
    </div>
)};

