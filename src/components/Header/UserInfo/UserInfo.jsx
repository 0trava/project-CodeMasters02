import { selectUser } from 'redux/auth/selectors';
import css from './UserInfo.module.css';
import { useSelector } from 'react-redux';


export const UserInfo = () => {
  
  // Отримуємо данні з Redux
  const {name, avatar} = useSelector(selectUser);






  const getFirstName = name => {
    if (name) {
      return name.split(' ')[0];
    } else {
      return name;
    }
  };
  const firstName = getFirstName(name);
  const getFirstLetter = firstName => firstName.charAt(0).toUpperCase();
  const avatarImg = avatar ? (
    <img src={avatar} alt="user" />
  ) : (
    <div className={css.backgroundIcon}>
      <p className={css.letterIcon}>{getFirstLetter(firstName)}</p>
    </div>
  );

  return (
    <div className={css.infoWrapper}>
      <p className={css.userName}>{firstName}</p>
      <div className={css.userImgWrapper}>{avatarImg}</div>
    </div>
  );
};
