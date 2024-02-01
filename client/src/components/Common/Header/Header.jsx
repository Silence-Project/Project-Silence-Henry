import styles from './Header.module.css'
import imgLogo from '../../../img/silenceImg.png'
import searchIcon from '../../../img/icons/search.png'
import shoppingCartIcon from '../../../img/icons/shopping-cart.png'
import userIcon from '../../../img/icons/user-icon.png'
import { NavLink } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";
import MenuHamburger from '../MenuHamburger/MenuHamburger'
// import mailInboxIcon from '../../../img/icons/mail-inbox-app.png'


const Header = () => {

  return (
    <div className={styles.header1}>
        
      <MenuHamburger/>
      <input type='text' className={styles.inputSearch} placeholder='Buscar' />
      <img src={searchIcon} alt="search" className={styles.search} />
      <NavLink to={ROUTES.HOME}>
        <img src={imgLogo} alt='silence' className={styles.silence} />
      </NavLink>
      <NavLink to={ROUTES.LOGGING}>
        <img src={userIcon} alt='user icon' className={styles.userIcon} />
      </NavLink>
      <img src={shoppingCartIcon} alt="kart market" className={styles.kartMarket} />            

    </div>
  )
}

export default Header
