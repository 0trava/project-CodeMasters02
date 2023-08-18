import './TaskDrop.css'
import arrowRight from '../../../images/arrow-circle-broken-right.svg'
import '../EditBtnMenu/EditBtnMenu.css';
import { BsBoxArrowRight } from "react-icons/bs";



export const TaskDrop = () => {

  return (
  <div className="TaskDrop__container">

    <button className='TaskDrop_item' onClick={()=> {}}>
        In progress
       <BsBoxArrowRight  className='TaskDrop_icon'/>
    </button>
    <button className='TaskDrop_item' onClick={()=> {}}>
       Done
       <BsBoxArrowRight  className='TaskDrop_icon'/>
    </button>
   
  </div>
  );
};
