import { SideBarPage } from 'pages/SideBarPage/SideBarPage';
import React from 'react';

export const ModalSideBar = ({setShowSideBar}) => {
  return (
    <div>
      <button onClick={setShowSideBar}></button>
       <SideBarPage/>
    </div>

  )
}