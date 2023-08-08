import React from 'react'
import './MainPage.css';
import heroLogo from '../../images/MainPage_duck.png';

export const MainPage = () => {
  return (
    <div className='container'>
    <section className='mainPage__hero'>
        <img className='mainPage__hero-logo' src={heroLogo} alt="logo"/>
        <h1 className='mainPage__hero-title'>GooseTrack</h1>
        <div className='mainPage__hero-box'>
            <a  className='mainPage__hero-link' href="/">Sign up</a>
            <button type='button'>Log in </button>
        </div>
    </section>
    <section className='mainPage__calendar'>
        <ul>
            <li>
               <div>
                    <p>1.</p>
                    <h2>Calendar</h2>
               </div>
               <img src="" alt="" />
            </li>
        </ul>




    </section>
    </div>
  )
}
