import styles from './MenuHamburger.module.css'

import hamburgerIcon from '../../../img/icons/hamburger.png'

import { useState } from "react"
import { NavLink } from "react-router-dom"
import ROUTES from "../../../Helpers/Routes.helper"

const MenuHamburger = () => {

  const [isOpen, setOpen] = useState(false)

  const handlerMenu = () => {
    setOpen(!isOpen)
  }

  return(
    <>
      <div className={styles.imgHover}>
        <img src={hamburgerIcon} alt='menu' className={styles.hamburger1} onClick={handlerMenu} />
      </div>
      <div className={isOpen ? styles.menuOpen : styles.menuClosed}>
        <div className={styles.navbarVertical}>
          <div className={styles.imgHover2}>
            <img src={hamburgerIcon} alt='menu' className={styles.hamburger2} onClick={handlerMenu} />
          </div>
          <div className={styles.option1}>
            <NavLink className={styles.createProducts} to={ROUTES.CREATE_PRODUCT}>Crear Producto</NavLink>
          </div>
          <div className={styles.option2}>
            <NavLink className={styles.login} to={ROUTES.LOGGING}>Inicia Sesión</NavLink>
          </div>
        </div>
      </div>
    </>
  )

}

export default MenuHamburger
