// eslint-disable-next-line 
import React, { useEffect } from 'react'
import './MainPage.css';
import heroLogo from '../../images/MainPage_duck_2x.png';
import btnIcon from '../../images/log-in-01.svg';
import { ROUTES } from 'utils/routes';
import { useNavigate } from 'react-router-dom';
import SimpleSlider from 'components/SimpleSlider/SimpleSlider';

import { getReviews } from '../../redux/reviews/selectors';
import { useSelector } from 'react-redux';


export const MainPage = (e) => {
  const navigate = useNavigate();
  // Отримуємо відгуки
  const Review = useSelector(getReviews);


  return (
    <div className='mainPage'>
    <section className='mainPage__hero'>
        <div  className='container'>
        <img className='mainPage__hero-logo' src={heroLogo} alt="logo"/>
        <h1 className='mainPage__hero-title'>G<span>oo</span>seTrack</h1>
        <div className='mainPage__hero-box'>
            <a className='mainPage__hero-link' href={ROUTES.REGISTER}>Sign up</a>
            <button className="mainPage__hero-btn" type='button' onClick={() => {navigate(ROUTES.LOGIN)}}>
              Log in
              <span>
                <img src={btnIcon} alt="icon-log-in" />
              </span>
              </button>
        </div>
        </div>
    </section>
    <section className='mainPage__section'>
        <ul className='mainPage__section-list'>
            <li className='mainPage__section-item'>
               <div className='mainPage__section-item_box'>
                    <p className='mainPage__section-item_number'>1.</p>
                    <div className='mainPage__section-item_block'>
                      <h2>Calendar</h2>
                    </div>
                    <h3>view</h3>
                    <p className='mainPage__section-item_text'>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</p>
               </div>
               <div className='mainPage__section-item_img1'></div>
            </li>
            <li className='mainPage__section-item'>
               <div className='mainPage__section-item_box'>
                    <p  className='mainPage__section-item_number'>2.</p>
                    <h3>SIDEBAR</h3>
                    <p className='mainPage__section-item_text'>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.</p>
               </div>
               <div className='mainPage__section-item_img2'></div>
            </li>
            <li className='mainPage__section-item'>
               <div className='mainPage__section-item_box'>
                    <p  className='mainPage__section-item_number'>3.</p>
                    <div className='mainPage__section-item_block'>
                      <h2>all in</h2>
                    </div>
                    <h3>one</h3>
                    <p className='mainPage__section-item_text'>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</p>
               </div>
                  <div className='mainPage__section-item_img3'></div>
            </li>
        </ul>
    </section>
    <section>
      <SimpleSlider review={Review}/>
    </section>
    </div>
  )
}


