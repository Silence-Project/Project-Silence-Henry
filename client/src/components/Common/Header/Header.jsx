import styles from './Header.module.css'

import imgLogo from '../../../img/silenceImg.png'
import searchIcon from '../../../img/icons/search.png'
import shoppingCartIcon from '../../../img/icons/shopping-cart.png'
import mailInboxIcon from '../../../img/icons/mail-inbox-app.png'

import MenuHamburger from '../MenuHamburger/MenuHamburger'


const Header = ({ estilosCss }) => {

  const ghostClass = estilosCss === 'Home' ? styles.ghost1 : styles.ghost2;
  const headerClass = estilosCss !== 'Home' ? styles.header1 : styles.header2

  return (
    <>
      <div className={ghostClass}></div>
      <header className={headerClass}>
        <a href="/home">
          <img src={imgLogo} alt='silence' className={styles.silence} />
        </a>
        <MenuHamburger/>
        <input type='text' className={styles.inputSearch} placeholder='Buscar' />
        <img src={searchIcon} alt="search" className={styles.search} />
        <img src={shoppingCartIcon} alt="kart martket" className={styles.kartMarket} />
        <img src={mailInboxIcon} alt='message' className={styles.mailInbox} />
      </header>
    </>
  )

}

export default Header
