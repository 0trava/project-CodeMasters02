import './TaskDrop.css'
import arrowRight from '../../../images/arrow-circle-broken-right.svg'
import '../EditBtnMenu/EditBtnMenu.css';



export const TaskDrop = () => {

  return (
  <div className="TaskDrop__container">

    <button className='TaskDrop_item' onClick={()=> {}}>
        <p>In progress</p>
       <img  className='TaskDrop_icon' src={arrowRight} alt="icon-move" />
    </button>
    <button className='TaskDrop_item' onClick={()=> {}}>
       <p>Done</p>
       <img  className='TaskDrop_icon' src={arrowRight} alt="icon-move" />
    </button>
   
  </div>
  );
};
