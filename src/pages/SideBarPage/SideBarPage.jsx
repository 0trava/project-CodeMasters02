import { UserNav } from 'components/UserNav/UserNav';
import { LogoutBtn } from 'components/LogoutBtn/LogoutBtn';
import logotype from '../../images/logo/logo_duck_desktop.png';
import css from './SideBarPage.module.css';

export const SideBarPage = ({ setShowSideBar }) => {
  return (
    <div className={css.SideBarPage_block}>
      <div className={css.block}>
        <div className={css.logo}>
          <img
            className={css.image}
            src={logotype}
            width="71"
            height="68"
            alt="logo"
          />
          <span className={css.text}>
            G<i className={css.cursive}>oo</i>seTrack
          </span>
        </div>
      </div>
      <UserNav setShowSideBar={setShowSideBar} />
      <LogoutBtn />
    </div>
  );
};
