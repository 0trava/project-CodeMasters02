import css from './UserInfo.module.css';

// TEST!!!  Замінити на РЕДАКС
const name = 'Yaroslav Yak';
const avatar = null;
// TEST!!!

export const UserInfo = () => {
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
