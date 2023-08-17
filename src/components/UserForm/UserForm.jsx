import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './UserForm.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { PiUserBold } from 'react-icons/pi';
import InputMask from 'react-input-mask';
import { updateUser } from 'redux/auth/operations';
import { useDispatch } from "react-redux";

// const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
// Дозволяє завантажувати формати зображень .jpeg, .png, .gif

// eslint-disable-next-line
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// eslint-disable-next-line
const phoneRegExp = /^\+38 \(\d{3}\) \d{3}-\d{4}$/;
// eslint-disable-next-line
const birthdayRegExp = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/((19|20)\d\d)$/;


const userFormSchema = yup.object().shape({
  //   avatar: Yup.mixed()
  //     .nullable()
  //     .notRequired()
  //     .test(
  //       'FILE_FORMAT',
  //       'The downloaded file format is not supported',
  //       value => !value || (value && SUPPORTED_FORMATS.includes(value.type))
  //     ),
  name: yup
    .string()
    .max(16, 'Name must be 16 characters or less.')
    .required('Name is a required!'),
  email: yup
    .string()
    .max(254)
    .matches(emailRegExp, 'Invalid email address. The email address must contain the @ sign.')
    .required('Email is a required!')
    .email('Invalid email address. The email address must contain the @ sign.'),
  date: yup
    .date(),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone is not valid'),
  birthday: yup
    .string()
    .matches(birthdayRegExp, 'Bithday date is not valid'),
  skype: yup
    .string()
    .max(16, 'Name must be 16 characters or less.')
});

export const UserForm = () => {
  // Отримуємо данні з Redux
  const dispatch = useDispatch();
  const [loadAvatar, setLoadAvatar] = useState("");
  // eslint-disable-next-line
  const { name, email, birthday, phone, skype, avatar } =
    useSelector(selectUser);

  const onSubmitFormik = (e, valuesFormik, actionsFormik) => {
    // console.log('actionsFormik:', actionsFormik);
    // console.log('valuesFormik:', valuesFormik);
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const name = e.currentTarget.name.value;
    const birthday = e.currentTarget.birthday.value;
    const phone = e.currentTarget.phone.value;
    const skype = e.currentTarget.skype.value;
    // TEST avatar
    const avatar = "";



    dispatch(updateUser({ name, email, birthday, phone, skype, avatar }));
  };

  // AVATAR - pre load
  const hadleChangeAvatar = (e) => {
    e.preventDefault();
    // const TEST = document.getElementById("file").files[0];
    const TEST = document.getElementById("file").files[0];
    
    setLoadAvatar(URL.createObjectURL(e.target.files[0]));
    console.log(loadAvatar);
  }

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

{/* AVATAR---------------------------------------------- */}
            <div className={css.UserForm__avatar}>
              {loadAvatar ? <img src={loadAvatar} alt="newAvatar" id="avatar"/> : ""} 
              {avatar ?
                <img src={loadAvatar} alt="newAvatar" /> 
                
              : <PiUserBold className={css.UserForm__avatar_icon} />
              }
              
              <label>
                <Field
                  name="avatar"
                  className={css.UserForm__avatar_input}
                  type="file"
                  accept="image/png, image/jpeg, image/gif"
                  id="file"
                  value=""
                  title=" "
                  onChange={hadleChangeAvatar}
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

            <div>
            {/* User */}
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

             {/*  Birthday  */}
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

            {/* Email */}
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

            <div>
            {/* Phone */}
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

            {/* Skype */}
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
            </div>

          </div>

          <button type="submit" className={css.submitButton}>
            Save changes
          </button>
        </Form>
      </Formik>
    </div>
  );
};
