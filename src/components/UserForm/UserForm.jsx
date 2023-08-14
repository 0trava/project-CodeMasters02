import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './UserForm.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { PiUserBold } from 'react-icons/pi';
import InputMask from 'react-input-mask';

// const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
// Дозволяє завантажувати формати зображень .jpeg, .png, .gif

// eslint-disable-next-line
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// eslint-disable-next-line
const phoneRegexp = /^\+38 \(\d{3}\) \d{3}-\d{4}$/;
// eslint-disable-next-line
const birthdayRegexp =
  /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/((19|20)\d\d)$/;

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
  birthday: Yup.string().matches(birthdayRegexp, 'Bithday date is not valid'),
  skype: Yup.string(),
});

export const UserForm = () => {
  // Отримуємо данні з Redux
  // eslint-disable-next-line
  const { name, email, birthday, phone, skype, avatar } =
    useSelector(selectUser);

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
            {/* AVATAR */}
            <div className={css.UserForm__avatar}>
              <PiUserBold className={css.UserForm__avatar_icon} />
              <label>
                <Field
                  name="avatar"
                  className={css.UserForm__avatar_input}
                  type="file"
                  accept="image/png, image/jpeg, image/gif"
                  id="file"
                  value=""
                  title=" "
                />
                <ErrorMessage
                  className={css.error}
                  name="avatar"
                  component="p"
                />
              </label>
            </div>

            <div>
              <p className={css.userName}> {name ? name : 'userName'}</p>
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
                defaultValue={name ? name : ''}
              />
              <ErrorMessage className={css.error} name="name" component="p" />
            </label>
            <label className={css.labelField}>
              Phone
              <Field name="phone">
                {({ field }) => (
                  <InputMask
                    mask="+38 (999) 999-9999"
                    {...field}
                    maskChar="_" // Use an underscore as the placeholder character
                    placeholder="Add a phone number"
                    type="tel"
                    className={css.inputField}
                    defaultValue={phone ? phone : ''}
                  />
                )}
              </Field>
              <ErrorMessage className={css.error} name="phone" component="p" />
            </label>
            <label className={css.labelField}>
              Birthday
              <Field name="birthday">
                {({ field }) => (
                  <InputMask
                    mask="99/99/9999"
                    {...field}
                    maskChar="_" // Use an underscore as the placeholder character
                    placeholder="DD/MM/YYYY"
                    className={css.inputField}
                    defaultValue={birthday ? birthday : ''}
                  />
                )}
              </Field>
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
                defaultValue={skype ? skype : ''}
              />
              <ErrorMessage className={css.error} name="skype" component="p" />
            </label>
            <label className={css.labelField}>
              Email
              <Field
                name="email"
                placeholder="Add your email"
                className={css.inputField}
                defaultValue={email ? email : ''}
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
