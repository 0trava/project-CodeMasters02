import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import style from './RegisterForm.module.css';

// eslint-disable-next-line
const emailRegExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = e.currentTarget;

    dispatch(register({ name, email, password }));
    e.currentTarget.reset();
  };

  return (
    <div className={style.register_container}>
      <div className={style.container}>
        <h1 className={style.title}>Sign Up</h1>
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
                    <Form className={style.form} onSubmit={handleSubmit}>
                        <label className={style.label} htmlFor="name">
                            Name
                            <Field
                                className={style.input}
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                            />
                            {isValid('name') === 'is-valid' && (
                            <p className={style.valid_message}>Correct name!</p>
                            )}
                            <ErrorMessage
                                name="name"
                                component="div"
                                className={style.error_message}
                            />
                        </label>
                        <label className={style.label} htmlFor="email">
                            Email
                            <Field
                                className={style.input}
                                // type="email"
                                name="email"
                                placeholder="Enter email"
                            />
                            {isValid('email') === 'is-valid' && (
                            <p className={style.valid_message}>Correct email!</p>
                            )}
                            <ErrorMessage
                                name="email"
                                component="div"
                                className={style.error_message}
                            />
                        </label>
                        <label className={style.label} htmlFor="password">
                            Password
                            <Field
                                className={style.input}
                                type="password"
                                name="password"
                                placeholder="Enter password"
                            />
                            {isValid('password') === 'is-valid' && (
                            <p className={style.valid_message}>Correct password!</p>
                            )}
                            <ErrorMessage
                                name="password"
                                component="div"
                                className={style.error_message}
                            />
                        </label>
                        <button className={style.button} type="submit">
                            Sign Up
                            <svg width="18" height="18">
                                <use href="../../images/sprite.svg#icon-log-in"></use>
                            </svg>
                        </button>
                    </Form>
                );
            }}
        </Formik>
    </div>
    </div>
)};

// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

// import { Formik, Form, Field, useFormik } from 'formik';
// import * as yup from 'yup';
// import style from './RegisterForm.module.css';

// // eslint-disable-next-line
// const emailRegExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// const SignUpSchema = yup.object().shape({
//   name: yup
//     .string()
//     .max(16, 'Name must be 16 characters or less.')
//     .required('Name is a required!'),
//   email: yup
//     .string()
//     .max(254)
//     .matches(emailRegExpression, 'Invalid email address. The email address must contain the @ sign.')
//     .required('Email is a required!')
//     .email('Invalid email address. The email address must contain the @ sign.'),
//   password: yup
//     .string()
//     .min(6, 'Password must be at least 6 characters.')
//     .max(254, 'Password is too long')
//     .required('Password is a required!'),
// });

// export default function RegisterForm() {
//     const dispatch = useDispatch();

//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             password: '',
//         },
//         validationSchema: SignUpSchema,

//         onSubmit: (values, { resetForm }) => {
//             dispatch(
//                 register({
//                     name: values.name,
//                     email: values.email,
//                     password: values.password,
//                 })
//             );
//             resetForm();
//         },
//     });

//     return (
//     <div className={style.register_container}>
//         <div className={style.container}>
//             <h1 className={style.title}>Sign Up</h1>
//             <Formik 
//             validationSchema={SignUpSchema} 
//             initialValues={{
//                 name: '',
//                 email: '',
//                 password: '',
//             }}>
//                 <Form className={style.form} >
//                     <label className={style.label} htmlFor="name">
//                         Name                   
//                     </label>                   
//                      <Field
//                         className={`${style.input} ${
//                             formik.touched.name && formik.errors.name
//                                 ? style.errorInput
//                                 : formik.touched.name && !formik.errors.name
//                                 ? style.success
//                                 : ''
//                         }`}
//                         id="name"
//                         type="text"
//                         name="name"
//                         placeholder="Enter your name"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.name}
//                     />
//                     {formik.touched.name && formik.errors.name ? (
//                         <div className={style.errorLabel}>{formik.errors.name}</div>
//                     ) : null}

//                     <label className={style.label} htmlFor="email">
//                         Email                    
//                     </label>                    
//                     <Field
//                         className={`${style.input} ${
//                             formik.touched.email && formik.errors.email
//                                 ? style.errorInput
//                                 : formik.touched.email && !formik.errors.email
//                                 ? style.success
//                                 : ''
//                         }`}
//                         id="email"
//                          // type="email"
//                         name="email"
//                         placeholder="Enter email"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.email}
//                     />
//                     {formik.touched.email && formik.errors.email ? (
//                         <div className={style.errorLabel}>{formik.errors.email}</div>
//                     ) : null}

//                     <label className={style.label} htmlFor="password">
//                         Password                     
//                     </label>                    
//                     <Field
//                         className={`${style.input} ${
//                             formik.touched.password && formik.errors.password
//                                 ? style.errorInput
//                                 : formik.touched.password && !formik.errors.password
//                                 ? style.success
//                                 : ''
//                         }`}
//                         id="password"
//                         type="password"
//                         name="password"
//                         placeholder="Enter password"
//                         onBlur={formik.handleBlur}
//                         onChange={formik.handleChange}
//                         value={formik.values.password}
//                     />
//                     {formik.touched.password && formik.errors.password ? (
//                         <div className={style.errorLabel}>{formik.errors.password}</div>
//                     ) : null}
//                         <button 
//                             className={style.button} 
//                             type="submit"
//                             disabled={!formik.isValid || !formik.dirty}
//                         >
//                             Sign Up
//                             <svg width="18" height="18">
//                                 <use href="../../images/sprite.svg#icon-log-in"></use>
//                             </svg>
//                         </button>
//                     </Form>
//         </Formik>
//     </div>
//     </div>
// )};
