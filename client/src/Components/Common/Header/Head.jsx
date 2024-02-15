import React from "react";
import { NavLink } from "react-router-dom";
import  ROUTES  from "../../../Helpers/Routes.helper";
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import styles from './Head.module.css';
import imgLogo from '../../../img/silenceImg.svg';
import shoppingCartIcon from '../../../img/icons/shopping-cart.png';
import userIcon from '../../../img/icons/user-icon.png';
import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "../Sidebar/Search/SearchBar";
import Descuento from "../Descuento/Descuento";
import { useSelector } from "react-redux";
import FavIcon from "../../../img/icons/favoritos.png"

const Head = ({
  setFilterTerm,
  handleColorChange,
  handleSizeChange,
  handlePriceChange,
  handleCategoryChange,
  handleMaterialChange,
}) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();


  const currentUser = useSelector((state) => state.user.user)

  if (currentUser && currentUser.isAdmin === true) {
    return (
      <div>
        <Descuento className={styles.descuento} />
        <div className={styles.header1}>
          <MenuHamburger
            handleColorChange={handleColorChange}
            handleSizeChange={handleSizeChange}
            handlePriceChange={handlePriceChange}
            handleCategoryChange={handleCategoryChange}
            handleMaterialChange={handleMaterialChange}
          />
          <SearchBar setFilterTerm={setFilterTerm} />
          <NavLink to={ROUTES.HOME}>
            <img src={imgLogo} alt="silence" className={styles.silence} />
          </NavLink>
          {isAuthenticated && (
            <NavLink to="/profile">
              <img src={userIcon} alt="user icon" className={styles.userIcon} />
            </NavLink>
          )}
          {!isAuthenticated && (
            <span onClick={() => loginWithRedirect()}>
              <img src={userIcon} alt="user icon" className={styles.userIcon} />
            </span>
          )}
          <NavLink to={ROUTES.Carrito}>
            <img
              src={shoppingCartIcon}
              alt="kart market"
              className={styles.kartMarket}
            />
          </NavLink>
  
          <NavLink to= "/favoritos">
            <img src={FavIcon} className={styles.favoritos} alt="favoritos"></img>
          </NavLink>

          <NavLink to= "/suspension">
            <button className={styles.suspension}>Suspension</button>
          </NavLink>
  
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Descuento className={styles.descuento} />
        <div className={styles.header1}>
          <MenuHamburger
            handleColorChange={handleColorChange}
            handleSizeChange={handleSizeChange}
            handlePriceChange={handlePriceChange}
            handleCategoryChange={handleCategoryChange}
            handleMaterialChange={handleMaterialChange}
          />
          <SearchBar setFilterTerm={setFilterTerm} />
          <NavLink to={ROUTES.HOME}>
            <img src={imgLogo} alt="silence" className={styles.silence} />
          </NavLink>
          {isAuthenticated && (
            <NavLink to="/profile">
              <img src={userIcon} alt="user icon" className={styles.userIcon} />
            </NavLink>
          )}
          {!isAuthenticated && (
            <span onClick={() => loginWithRedirect()}>
              <img src={userIcon} alt="user icon" className={styles.userIcon} />
            </span>
          )}
          <NavLink to={ROUTES.Carrito}>
            <img
              src={shoppingCartIcon}
              alt="kart market"
              className={styles.kartMarket}
            />
          </NavLink>
  
          <NavLink to= "/favoritos">
            <img src={FavIcon} className={styles.favoritos} alt="favoritos"></img>
          </NavLink>
  
         
        </div>
      </div>
    );
  }


};

export default Head;
