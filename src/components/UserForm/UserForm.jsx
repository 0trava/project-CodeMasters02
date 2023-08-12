import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './UserForm.module.css';
// import { useSelector } from 'react-redux';

// const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
// Дозволяє завантажувати формати зображень .jpeg, .png, .gif

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

const userFormSchema = Yup.object().shape({
  //   avatar: Yup.mixed()
  //     .nullable()
  //     .notRequired()
  //     .test(
  //       'FILE_FORMAT',
  //       'The downloaded file format is not supported',
  //       value => !value || (value && SUPPORTED_FORMATS.includes(value.type))
  //     ),
  name: Yup.string()
    .max(16, 'Maximum length is 16 characters')
    .required('Name is a required!'),
  email: Yup.string()
    .matches(emailRegexp, 'Email is not valid')
    .required('Enter an email address'),
  date: Yup.date(),
  phone: Yup.string().matches(phoneRegexp, 'Phone is not valid'),
  skype: Yup.string(),
});

export const UserForm = () => {
  const onSubmitFormik = (valuesFormik, actionsFormik) => {
    console.log('actionsFormik:', actionsFormik);
    console.log('valuesFormik:', valuesFormik);
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ avatar: '', password: '' }}
        validationSchema={userFormSchema}
        onSubmit={(values, actions) => {
          onSubmitFormik(values, actions);
        }}
      >
        <Form>
          <label>
            <Field
              name="avatar"
              type="file"
              accept="image/png, image/jpeg, image/gif"
            />
            <ErrorMessage name="avatar" component="p" />
          </label>
          <div>
            <p> "{'userName'}" </p>
            <p>User</p>
          </div>
          <label>
            User Name
            <Field name="name" placeholder="Add your name" />
            <ErrorMessage name="name" component="p" />
          </label>
          <label>
            Phone
            <Field name="phone" type="tel" placeholder="Add a phone number" />
            <ErrorMessage name="phone" component="p" />
          </label>
          <label>
            Birthday
            <Field name="birthday" placeholder="DD/MM/YYYY" />
            <ErrorMessage name="birthday" type="date" component="p" />
          </label>
          <label>
            Skype
            <Field name="skype" placeholder="Add a skype number" />
            <ErrorMessage name="skype" component="p" />
          </label>
          <label>
            Email
            <Field name="email" placeholder="Add your email" />
            <ErrorMessage name="email" type="email" component="p" />
          </label>

          <button type="submit">Save changes</button>
        </Form>
      </Formik>
    </div>
  );
};
