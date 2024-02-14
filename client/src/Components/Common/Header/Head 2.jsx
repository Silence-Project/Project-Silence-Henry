import { useState } from "react";
import './head.css'

import React from 'react'

const Head = () => {

  // Cambiar a burger clases 

  const [burger_class, setBurgerClasses] = useState("burger-nar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuCLicked, setIsMenuClicked] = useState(false)

  // Cambiar a Menu Burger

  const updateMenu = () => {
    if(!isMenuCLicked) {
      setBurgerClasses("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClasses("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuCLicked)
  }

  return (
    <div style={{width: '100%', height: '100vh'}}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className="burger_class" ></div>
          <div className="burger_class" ></div>
          <div className="burger_class" ></div>
        </div>
      </nav>

      <div className={menu_class}></div>

    </div>
  )
}

export default Head