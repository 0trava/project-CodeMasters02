import React from 'react';
import { RiPencilLine } from 'react-icons/ri';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsBoxArrowRight } from "react-icons/bs";
import arrowRight from '../../../images/arrow-circle-broken-right.svg'
import './EditBtnMenu.css';
import sprite from '../../../images/sprite.svg'


// !!!!  ІНФО - треба передати пропсами 3 задачи на кнопки. 

export const EditBtnMenu = () => {
  return (
  <div className='EditBtnMenu__btn-block'>
    {/* Перемістити */}
    <button className='EditBtnMenu_item' onClick={()=> {}}>
      <BsBoxArrowRight  className='EditBtnMenu_icon'/>
    </button>


    {/* Редагувати */}
    <button className='EditBtnMenu_item' onClick={()=> {}}>
      <RiPencilLine  className='EditBtnMenu_icon'/>
    </button>

    {/* Видалити */}
    <button className='EditBtnMenu_item' onClick={()=> {}}>
      <RiDeleteBinLine className='EditBtnMenu_icon'/>
    </button>
  </div>);
};
