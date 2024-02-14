import { NavLink } from "react-router-dom";
import Category from "./Category/Category.jsx";
import ROUTES from "../../../Helpers/Routes.helper.js";
import Size from "./Size/Size.jsx";
import Color from "./Color/Color.jsx";
import Price from "./Price/Price.jsx";
import Material from "./Material/Material.jsx";
import "./Sidebar.css";

const Sidebar = ({ handleChange, handleColorChange, handleSizeChange, handlePriceChange, 
  handleMaterialChange, handleCategoryChange,  }) => {
  return (
    <>
    <div className="sideBarContainer">

      <section className="sidebar">
        <div className="logo-container">
          <h3>FILTRO</h3>
        </div>
        <NavLink to={ROUTES.ADMIN} className={StyleSheet.linkBtn}>
          Administración ⚙️
        </NavLink>
        <Size handleSizeChange={handleSizeChange}/>
        <Price handlePriceChange={handlePriceChange}/>
        <Color handleColorChange={handleColorChange} />
        <Material handleMaterialChange={handleMaterialChange} />
        {/* <Category handleCategoryChange={handleCategoryChange}/> */}
      </section>
    </div>
    </>
  );
};

export default Sidebar;