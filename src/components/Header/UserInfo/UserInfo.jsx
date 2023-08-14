import { selectUser } from 'redux/auth/selectors';
import css from './UserInfo.module.css';
import { useSelector } from 'react-redux';
import { ROUTES } from 'utils/routes';


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
    <a className={css.backgroundIcon}  href={ROUTES.ACCOUNT}>
      <p className={css.letterIcon}>{getFirstLetter(firstName)}</p>
    </a>
  );

  return (
    <a className={css.infoWrapper} href={ROUTES.ACCOUNT}>
      <p className={css.userName}>{firstName}</p>
      <div className={css.userImgWrapper}>{avatarImg}</div>
    </a>
  );
};
