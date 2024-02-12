import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../../Redux/Store/Slices/ProductSlice";
import styles from "./Color.module.css"; 

const Color = ({ handleColorChange }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [uniqueColors, setUniqueColors] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const colors = [...new Set(products.map((product) => product.color))];
      setUniqueColors(colors);
    }
  }, [products]);

  const handleColorChangeTwo = (event) => {
    handleColorChange(event.target.value);
    console.log("Color seleccionado:", event.target.value);
  };

  return (
    <div>
      <h2 className={styles["color-title"]}>Colores Disponibles</h2>
      <select
        onChange={handleColorChangeTwo}
        className={styles["sidebar-items"]}
      >
        {uniqueColors.map((color, index) => (
          <option key={index} value={color} className={styles["color-option"]}>
            <span
              className={styles["color-square"]}
              style={{ backgroundColor: color }}
            ></span>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Color;
