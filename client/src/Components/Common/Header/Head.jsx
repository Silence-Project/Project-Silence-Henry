import React from "react";
import { NavLink } from "react-router-dom";
import {ROUTES} from "../../../Helpers/Routes.helper";
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import styles from './Head.module.css';
import imgLogo from '../../../img/silenceImg.png';
import shoppingCartIcon from '../../../img/icons/shopping-cart.png';
import userIcon from '../../../img/icons/user-icon.png';
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "../Sidebar/Search/SearchBar";
import Descuento from "../Descuento/Descuento";

const Head = ({ setFilterTerm, handleColorChange, handleSizeChange, handlePriceChange, handleCategoryChange }) => { 
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      <Descuento className={styles.descuento}/>
    <div className={styles.header1}>
      <MenuHamburger handleColorChange={handleColorChange} 
                      handleSizeChange={handleSizeChange}
                      handlePriceChange={handlePriceChange}
                      handleCategoryChange={handleCategoryChange}/>
      <SearchBar setFilterTerm={setFilterTerm} />  
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
      <NavLink to={ROUTES.Carrito}>      
        <img src={shoppingCartIcon} alt="kart market" className={styles.kartMarket} />
      </NavLink>
    </div>
    </div>
  );
};

export default Head;
