// import mailInboxIcon from '../../../img/icons/mail-inbox-app.png'


// import { NavLink } from "react-router-dom";

import { NavLink } from "react-router-dom";

import ROUTES from "../../../Helpers/Routes.helper";

import MenuHamburger from '../MenuHamburger/MenuHamburger';


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import styles from './Head.module.css';
import imgLogo from '../../../img/silenceImg.png';
import searchIcon from '../../../img/icons/search.png';
import shoppingCartIcon from '../../../img/icons/shopping-cart.png';
import userIcon from '../../../img/icons/user-icon.png';

// import LoginButton from "../../Authentication/LoginBtn/LoginBtn"
// import AuthLoginButtton from "../../Authentication/LoginBtn/AuthLoginButtton";

import { useAuth0 } from "@auth0/auth0-react";

// Ruta para filtrar nombres

import { getByName } from '../../../Redux/Store/Slices/ProductSlice';

const Head = () => {

  const { isAuthenticated, loginWithRedirect } = useAuth0();

// Buscar prenda

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);


  const [name, setName] = useState("");


  async function search(e) {
    e.preventDefault();
    if (allProducts && allProducts.some((g) => g.name.toLowerCase().includes(name.toLowerCase()))) {

      await dispatch(getByName(name));
      setName("");
      document.getElementById("SearchInput").value = "";
    } else {
      alert("Prenda no encontrada");
      document.getElementById("SearchInput").value = "";
    }
  }
  
  //
  
  return (
    <div className={styles.header1}>
      <MenuHamburger />
    <form>

      {/* Input Searh Bar */}

            <input
              className={styles.inputSearch}
              id="SearchInput"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Buscar Prenda..."
            />

            <img src={searchIcon} 
            alt="search" 
            className={styles.search} 
            type="submit"
            onClick={(e) => search(e)} /> 

    </form>

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
