import React from 'react'
import './MainPage.css';
import heroLogo from '../../images/MainPage_duck.png';
import  MainPage_img_1_desktop from '../../images/MainPage_img_1_desktop.png';
import  MainPage_img_2_desktop from '../../images/MainPage_img_2_desktop.png';
import  MainPage_img_3_desktop from '../../images/MainPage_img_3_desktop.png';


export const MainPage = () => {
  return (
    <div className='mainPage'>
    <section className='mainPage__hero'>
        <div  className='container'>
        <img className='mainPage__hero-logo' src={heroLogo} alt="logo"/>
        <h1 className='mainPage__hero-title'>GooseTrack</h1>
        <div className='mainPage__hero-box'>
            <a  className='mainPage__hero-link' href="/">Sign up</a>
            <button type='button'>Log in </button>
        </div>
        </div>
    </section>
    <section className='mainPage__section'>
        <ul className='mainPage__section-list'>
            <li className='mainPage__section-item'>
               <div className='mainPage__section-item_box'>
                    <p className='mainPage__section-item_number'>1.</p>
                    <h2>Calendar</h2>
                    <h3>view</h3>
                    <p className='mainPage__section-item_text'>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</p>
               </div>
               <img src={MainPage_img_1_desktop} alt="MainPage_img_1" />
            </li>
            <li className='mainPage__section-item'>
               <div>
                    <p className='mainPage__section-number'>2.</p>
                    <h3>SIDEBAR</h3>
                    <p>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.</p>
               </div>
               <img src={MainPage_img_2_desktop}  alt="MainPage_img_2" />
            </li>
            <li className='mainPage__section-item'>
               <div>
                    <p className='mainPage__section-number'>3.</p>
                    <h2 className='mainPage__section-item_preTitle'>all in</h2>
                    <h3>one</h3>
                    <p>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</p>
               </div>
               <img src={MainPage_img_3_desktop}  alt="MainPage_img_3" />
            </li>
        </ul>




    </section>
    </div>
  )
}


