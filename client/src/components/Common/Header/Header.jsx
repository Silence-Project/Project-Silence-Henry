import styles from './Header.module.css'

import imgLogo from '../../../img/silenceImg.png'
import searchIcon from '../../../img/icons/search.png'
import shoppingCartIcon from '../../../img/icons/shopping-cart.png'
// import mailInboxIcon from '../../../img/icons/mail-inbox-app.png'
import userIcon from '../../../img/icons/user-icon.png'
import { NavLink } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";

import MenuHamburger from '../MenuHamburger/MenuHamburger'
import LoginButton from '../../Authentication/LoginBtn/LoginBtn'
import LogoutButton from '../../Authentication/LogoutBtn/LogoutBtn'
import Profile from '../../Authentication/ProfileUser/ProfileUser'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {

  const { isAuthenticated } = useAuth0();
  // const ghostClass = estilosCss === 'Home' ? styles.ghost1 : styles.ghost2;
  // const headerClass = estilosCss === 'Home' ? styles.header1 : styles.header2

  return (
    <div className={styles.header1}>
      {/* <nav className={styles.navMenu}> */}
      <ul>
        <li>
          <MenuHamburger />
        </li>
        <li>
          <input type='text' className={styles.inputSearch} placeholder='Buscar' />
        </li>
        <li>
          <img src={searchIcon} alt="search" className={styles.search} />
        </li>
        <li className={styles.silencelogo}>
          <NavLink to={ROUTES.HOME}>
            <img src={imgLogo} alt='silence' className={styles.silence} />
          </NavLink>
        </li>
        {/* LOGEOOOOOOOOOOOOOOS AUTH0 */}
        {
          !isAuthenticated ?
            <li>
              <LoginButton />
            </li> :
            <><li>
              <Profile />
            </li>
        <li>
          <LogoutButton />
        </li></>
        }
        <li>
          <NavLink to={ROUTES.LOGGING}>
            <img src={userIcon} alt='user icon' className={styles.mailInbox} />
          </NavLink>
        </li>
        <li>
          <img src={shoppingCartIcon} alt="kart market" className={styles.kartMarket} />
        </li>
      </ul>
      {/* </nav> */}
    </div>
  )
}

export default Header
