import './TaskCard.css'
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { EditBtnMenu } from '../EditBtnMenu/EditBtnMenu';



export const TaskCard = () => {
  const { name, avatar } = useSelector(selectUser);

  return (
  <div className="TaskCard__container">
    <p className="TaskCard__title">Read and respond to emails and messages...</p>
    
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
      <div className='TaskCard__status'>
        <p>TaskCard</p>
      </div>


    </div>
      {/* Buttons */}
      <EditBtnMenu className="TaskCard__btn"/>
    </div>


  </div>
  );
};
