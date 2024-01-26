import styles from './Header.module.css'

import imgLogo from '../../../img/silenceImg.png'
import hamburgerIcon from '../../../img/icons/hamburger.png'
import searchIcon from '../../../img/icons/search.png'
import shoppingCartIcon from '../../../img/icons/shopping-cart.png'
import mailInboxIcon from '../../../img/icons/mail-inbox-app.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={imgLogo} alt='silence' className={styles.silence} />
      <img src={hamburgerIcon} alt='menu' className={styles.hamburger} />
      <input type='text' className={styles.inputSearch} />
      <img src={searchIcon} alt="search" className={styles.search} />
      <img src={shoppingCartIcon} alt="kart martket" className={styles.kartMarket} />
      <img src={mailInboxIcon} alt='message' className={styles.mailInbox} />
    </header>
  )
}

export default Header
