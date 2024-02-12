import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./Color.module.css";

const Color = ({ setFilterTerm }) => {
  const products = useSelector(state => state.products)
    
  const handleSearchChange = () => {
    console.log(products)
    
  };

  return (

    <div>
      <h2 className="sidebar-title">COLORES</h2>
   
      <div>
        <select onChange={handleSearchChange} className={styles.inputSearch}>
          <option value="todas">Todos los colores</option>
          <option value="negro">Negro</option>
          <option value="blanco">Blanco</option>
          <option value="gris">Gris</option>
          <option value="rojo">Rojo</option>
          <option value="azul">Azul</option>
          <option value="verde">Verde</option>
      </select>
      </div>
    </div>
  );
};

export default Color;
