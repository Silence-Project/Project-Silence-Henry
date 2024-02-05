// import mailInboxIcon from '../../../img/icons/mail-inbox-app.png'
import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import styles from './Head.module.css';
import imgLogo from '../../../img/silenceImg.png';
import searchIcon from '../../../img/icons/search.png';
import shoppingCartIcon from '../../../img/icons/shopping-cart.png';
import userIcon from '../../../img/icons/user-icon.png';
// import LoginButton from "../../Authentication/LoginBtn/LoginBtn"
// import AuthLoginButtton from "../../Authentication/LoginBtn/AuthLoginButtton";
import { useAuth0 } from "@auth0/auth0-react";

const Head = () => {

  const { isAuthenticated, loginWithRedirect } = useAuth0();


  return (
    <div className={styles.header1}>
      <MenuHamburger />
      <input type='text' className={styles.inputSearch} placeholder='Buscar' />
      <img src={searchIcon} alt="search" className={styles.search} />
      <NavLink to={ROUTES.HOME}>
        <img src={imgLogo} alt='silence' className={styles.silence} />
      </NavLink>
      {
        isAuthenticated && (
          <NavLink to="/profile">
            <img src={userIcon} alt='user icon' className={styles.userIcon} />
          </NavLink>
        )
      }
      {
        !isAuthenticated && (
          <span onClick={() => loginWithRedirect()}>
          <img src={userIcon} alt='user icon' className={styles.userIcon} />
          </span>
        )
      }

      {/* <NavLink to={ROUTES.LOGGING}> */}
        {/* <NavLink to={<AuthLoginButtton />}> */}
        {/* <img src={userIcon} alt='user icon' className={styles.userIcon} /> */}
      {/* </NavLink> */}
      <NavLink to={ROUTES.Carrito}>      
        <img src={shoppingCartIcon} alt="kart market" className={styles.kartMarket} />
      </NavLink>
    </div>
  );
};

export default Head;
