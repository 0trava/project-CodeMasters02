import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './UserForm.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { PiUserBold } from 'react-icons/pi';
// import InputMask from 'react-input-mask';
import { updateUser } from 'redux/auth/operations';
import { useDispatch } from "react-redux";



// eslint-disable-next-line
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// eslint-disable-next-line
const phoneRegExp = /^\+38 \(\d{3}\) \d{3}-\d{4}$/;
// eslint-disable-next-line
const birthdayRegExp = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/((19|20)\d\d)$/;


const UserFormSchema = yup.object().shape({
  name: yup
    .string()
    .max(16, 'Name must be 16 characters or less.'),
    // .required('Name is required!'),
  email: yup
    .string()
    .max(254)
    .matches(
      emailRegExp,
      'Invalid email address. The email address must contain the @ sign.'
    )
    // .required('Email is a required!')
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
  const { name, email, birthday, phone, skype, avatar } = useSelector(selectUser);

  const [avatarImg, setAvatarImg] = useState("");
  const [formData, setFormData] = useState({
    birthday: birthday,
    email: email,
    name: name,
    phone: phone,
    skype: skype,
  });

  // ВІДПРАВКА ФОРМИ
  const onSubmitFormik = async (e) => {
    e.preventDefault();
      let formDataToSend = new FormData();

      if (avatarImg) {
        formDataToSend.append('avatar', avatarImg);
      }

     
      // Append other form data fields
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      await dispatch(updateUser(formDataToSend));


    
  };

  // AVATAR - pre load
  const hadleChangeAvatar = (e) => {
    e.preventDefault();
    
    setLoadAvatar(URL.createObjectURL(e.target.files[0]));
    setAvatarImg(e.target.files[0]);
  };


  // ПЕРЕЗАПИС данних з input
  const handleInputChange = (event) => {
    // TEST -------------------------------------
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };



  return (
    <div className={css.container}>
      <Formik
        initialValues={{ avatar: '', password: '' }}
        validationSchema={UserFormSchema}
        onSubmit={(values, actions) => {
          onSubmitFormik(values, actions);
        }}
      >
          <Form onSubmit={onSubmitFormik}>
          <div className={css.avatarWrapper}>

{/* AVATAR---------------------------------------------- */}
            <div className={css.UserForm__avatar}>
              {loadAvatar ? 
                <img className={css.new__avatar} src={loadAvatar} alt="newAvatar" id="avatar"/> 
                : ""} 
              {avatar ?
                <img src={avatar} alt="newAvatar" /> 
                
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
                type="text"
                name="name"
                required
                placeholder="Add your name"
                defaultValue={name ? name : ''}
                onChange={handleInputChange} 
                className={css.inputField}

                // max="16"
              />
              <ErrorMessage className={css.error} name="name" component="p" />
            </label>

{/*  Birthday  */}
             <label className={css.labelField}>
              Birthday
              <Field name="birthday" 
                                  placeholder="DD/MM/YYYY"
                                  className={css.inputField}
                                  defaultValue={birthday ? birthday : ''}
                                  onChange={handleInputChange}
                                  type="date"
                                  pattern="\d{4}-\d{2}-\d{2}"
                                   >
                {/* {({ field }) => (
                  <InputMask
                    mask="99/99/9999"
                    {...field}
                    maskChar="_" // Use an underscore as the placeholder character
                    placeholder="DD/MM/YYYY"
                    className={css.inputField}
                    defaultValue={birthday ? birthday : ''}
                    onChange={handleInputChange} 
                  />
                )} */}
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
                onChange={handleInputChange} 
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
              <Field name="phone"
                                  placeholder="Add a phone number"
                                  type="tel"
                                  className={css.inputField}
                                  defaultValue={phone ? phone : ''}
                                  onChange={handleInputChange}
                                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                                  >
                {/* {({ field }) => (
                  <InputMask
                    mask="+38 (999) 999-9999"
                    {...field}
                    maskChar="_" // Use an underscore as the placeholder character
                    placeholder="Add a phone number"
                    type="tel"
                    className={css.inputField}
                    defaultValue={phone ? phone : ''}
                    onChange={handleInputChange} 
                  />
                )} */}
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
                onChange={handleInputChange} 
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
