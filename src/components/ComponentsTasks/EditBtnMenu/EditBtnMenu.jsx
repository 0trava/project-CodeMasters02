import React from 'react';
import { RiPencilLine } from 'react-icons/ri';
import { RiDeleteBinLine } from 'react-icons/ri';
import arrowRight from '../../../images/arrow-circle-broken-right.svg'
import './EditBtnMenu.css';


// !!!!  ІНФО - треба передати пропсами 3 задачи на кнопки. 

export const EditBtnMenu = () => {
  return (
  <div className='EditBtnMenu__btn-block'>
    {/* Перемістити */}
    <button className='EditBtnMenu_item' onClick={()=> {}}>
       <img  className='EditBtnMenu_icon' src={arrowRight} alt="icon-move" />
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
