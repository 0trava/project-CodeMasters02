import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './UserForm.module.css';
// import { useSelector } from 'react-redux';

// const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
// Дозволяє завантажувати формати зображень .jpeg, .png, .gif

// eslint-disable-next-line
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// eslint-disable-next-line
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
          <div className={css.avatarWrapper}>
            <label>
              <Field
                name="avatar"
                type="file"
                accept="image/png, image/jpeg, image/gif"
              />
              <ErrorMessage className={css.error} name="avatar" component="p" />
            </label>
            <div>
              <p className={css.userName}> "{'userName'}" </p>
              <p className={css.user}>User</p>
            </div>
          </div>
          <div className={css.fieldWrapper}>
            <label className={css.labelField}>
              User Name
              <Field
                name="name"
                placeholder="Add your name"
                className={css.inputField}
              />
              <ErrorMessage className={css.error} name="name" component="p" />
            </label>
            <label className={css.labelField}>
              Phone
              <Field
                name="phone"
                type="tel"
                placeholder="Add a phone number"
                className={css.inputField}
              />
              <ErrorMessage className={css.error} name="phone" component="p" />
            </label>
            <label className={css.labelField}>
              Birthday
              <Field
                name="birthday"
                placeholder="DD/MM/YYYY"
                className={css.inputField}
              />
              <ErrorMessage
                className={css.error}
                name="birthday"
                type="date"
                component="p"
              />
            </label>
            <label className={css.labelField}>
              Skype
              <Field
                name="skype"
                placeholder="Add a skype number"
                className={css.inputField}
              />
              <ErrorMessage className={css.error} name="skype" component="p" />
            </label>
            <label className={css.labelField}>
              Email
              <Field
                name="email"
                placeholder="Add your email"
                className={css.inputField}
              />
              <ErrorMessage
                className={css.error}
                name="email"
                type="email"
                component="p"
              />
            </label>
          </div>

          <button type="submit" className={css.submitButton}>
            Save changes
          </button>
        </Form>
      </Formik>
    </div>
  );
};
