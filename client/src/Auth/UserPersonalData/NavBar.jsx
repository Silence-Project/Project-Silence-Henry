import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../Helpers/Routes.helper";
import styles from "./Navbar.module.css";

const Navbar = ({ setShowPersonalData, id }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id="test" className={styles.navBar}>
       

        <div className={styles.menu} onClick={toggleMenu}>
          <span></span>
          <span> </span>
          <span></span>
        </div>

        <ul style={menuOpen ? { display: "flex" } : {}}>
          <li>
            <NavLink
              to={ROUTES.REGISTER}
              onClick={() => setShowPersonalData(true)}
              style={({ isActive }) => {
                return {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: isActive ? "rgba(84, 76, 69, 1)" : "",
                  padding: "12px 2px",
                  left: "0",
                  borderRadius: "5px",
                  lineHeight: "1.2",
                  zIndex: "-2"
                };
              }}
            >
            <button className={styles.btnAjust}>  AJUSTES ⚙️ </button> <span></span>
            </NavLink>
          </li>

         
        </ul>
      </nav>

    </>
  );
};

export default Navbar;
