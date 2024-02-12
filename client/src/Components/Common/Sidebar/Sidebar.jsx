import Category from "./Category/Category.jsx";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper.js";
import Size from "./Size/Size.jsx";
import Color from "./Color/Color.jsx";
import Price from "./Price/Price.jsx";

import "./Sidebar.css";

const Sidebar = ({ handleChange, handleColorChange, handleSizeChange, handlePriceChange, handleCategoryChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h3>FILTRO</h3>
        </div>
        <NavLink to={ROUTES.ADMIN} className={StyleSheet.linkBtn}>
          Administración ⚙️
        </NavLink>
        <Category handleCategoryChange={handleCategoryChange}/>
        <Color handleColorChange={handleColorChange} />
        <Price handlePriceChange={handlePriceChange}/>
        <Size handleSizeChange={handleSizeChange}/>
      </section>
    </>
  );
};

export default Sidebar;
