import React from 'react';
import { RiPencilLine } from 'react-icons/ri';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsBoxArrowRight } from "react-icons/bs";
import arrowRight from '../../../images/arrow-circle-broken-right.svg'
import './EditBtnMenu.css';
import sprite from '../../../images/sprite.svg'


// !!!!  ІНФО - треба передати пропсами 3 задачи на кнопки. 

export const EditBtnMenu = ({clickDelete, clickEdit, clickMove}) => {

  const handleDeleteClick = (e) => {
    clickDelete(e); // Call the clickDelete() function from props
  }

  const handleEditClick = (e) => {
      clickEdit(e); // Call the clickEdit() function from props
  }

  const handleMoveClick = (e) => {
    clickMove(e); // Call the clickMove() function from props
}


  return (
  <div className='EditBtnMenu__btn-block'>
    {/* Перемістити */}
    <button className='EditBtnMenu_item' onClick={handleMoveClick}>
      <BsBoxArrowRight  className='EditBtnMenu_icon'/>
    </button>


    {/* Редагувати */}
    <button className='EditBtnMenu_item' onClick={handleEditClick}>
      <RiPencilLine  className='EditBtnMenu_icon'/>
    </button>

    {/* Видалити */}
    <button className='EditBtnMenu_item' onClick={handleDeleteClick}>
      <RiDeleteBinLine className='EditBtnMenu_icon'/>
    </button>
  </div>);
};
