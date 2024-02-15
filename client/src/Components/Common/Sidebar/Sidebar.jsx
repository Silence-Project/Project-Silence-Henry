import Category from "./Category/Category.jsx";
import Size from "./Size/Size.jsx";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper.js";
import Color from "./Color/Color.jsx";
import Price from "./Price/Price.jsx";
import Material from "./Material/Material.jsx";
import "./Sidebar.css";

const Sidebar = ({
  handleChange,
  handleColorChange,
  handleSizeChange,
  handlePriceChange,
  handleMaterialChange,
  handleCategoryChange,
}) => {
  return (
    <>
      <div className="sideBarContainer">
        <section className="sidebar">
          <div className="logo-container">
            <h5 className="title-filtros">FILTROS</h5>
          </div>
          <Size handleSizeChange={handleSizeChange} />
          <Price handlePriceChange={handlePriceChange} />
          <Color handleColorChange={handleColorChange} />
          <Material handleMaterialChange={handleMaterialChange} />
          {/* <Category handleCategoryChange={handleCategoryChange}/> */}
        </section>
      </div>
    </>
  );
};

export default Sidebar;
