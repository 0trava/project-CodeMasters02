import './TaskCard.css'
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { EditBtnMenu } from '../EditBtnMenu/EditBtnMenu';
import { useDispatch } from "react-redux";
import { deleteTask } from 'redux/tasks/operation';


export const TaskCard = ({task}) => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector(selectUser);
  // Отримання данних
  const {priority, title, _id} = task;
 // Перевірка довжини тексту в задачі ( скорочення )
  let shortTitle = title;
  if (shortTitle.lenght > 35) {
    shortTitle = title.slice(0, 10) + "...";
  }

// BUTTON - на видалення.
console.log(task);


const clickDelete = async (e) => {
    e.preventDefault();
    await  dispatch(deleteTask(_id))

}




  return (
  <div className="TaskCard__container">
    <p className="TaskCard__title">{shortTitle}</p>
    
    <div className='TaskCard__info'>


    <div  className='TaskCard__block'>
      {/* Avatar */}
      <div className="TaskCard__avatar">
          {avatar ? (
            <img src={avatar} alt="reviewImg" key="reviewImg" />
          ) : (
            <p>{name[0]}</p>
          )}
        </div>
      
      {/* Task Status */}
      {priority === "low" ? 
        <div className='TaskCard__status-low'>
        <p className='TaskCard__status-title'>Low</p>
        </div>
      : ""}

      {priority === "medium" ? 
        <div className='TaskCard__status-medium'>
        <p className='TaskCard__status-title'>Medium</p>
        </div>
      : ""}

      {priority === "high" ? 
        <div className='TaskCard__status-high'>
        <p className='TaskCard__status-title'>High</p>
        </div>
      : ""}




    </div>
      {/* Buttons */}
      <EditBtnMenu 
       className="TaskCard__btn"
       clickDelete={clickDelete} />
    </div>


  </div>
  );
};
