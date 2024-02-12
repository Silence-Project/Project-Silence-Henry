import Price from "./Price/Price.jsx";
import Category from "./Category/Category.jsx";
import Size from "./Size/Size.jsx";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper.js";
import Color from "./Color/Color.jsx";

import "./Sidebar.css";

const Sidebar = ({ handleChange, handleColorChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h3>FILTRO</h3>
        </div>
        <NavLink to={ROUTES.ADMIN} className={StyleSheet.linkBtn}>
          Administración ⚙️
        </NavLink>
        <Category handleColorChange={handleColorChange}/>
        <Price handleColorChange={handleColorChange}/>
        <Size handleColorChange={handleColorChange}/>
        <Color handleColorChange={handleColorChange} />
      </section>
    </>
  );
};

export default Sidebar;
