import { SideBarPage } from 'pages/SideBarPage/SideBarPage';
import React from 'react';
import './ModalSideBar.css';
import sprite from "../../images/sprite.svg"
import { UniqueModalSideBar } from './UniqueModalSideBar';

export const ModalSideBar = ({ setShowSideBar }) => {
  return (
    <UniqueModalSideBar  onClose={setShowSideBar}>
      
          <button className="closeButton" onClick={setShowSideBar}>
            <svg className="closeIcon">
              <use href={`${sprite}#icon-x-close`} />
            </svg>
          </button>
          <SideBarPage setShowSideBar={setShowSideBar} />
        </UniqueModalSideBar>
    
  );
};
