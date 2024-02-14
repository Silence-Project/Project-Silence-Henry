import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../../Redux/Store/Slices/ProductSlice";
import styles from "./Material.module.css"; 

const Material = ({ handleMaterialChange }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [uniqueMaterial, setUniqueMaterial] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const materials = [...new Set(products.map((product) => product.material))];
      setUniqueMaterial(materials);
    }
  }, [products]);

  const handleMaterialChangeTwo = (event) => {
    handleMaterialChange(event.target.value);
    console.log("Material seleccionado:", event.target.value);
  };

  return (
    <div>
      <h2 className={styles["color-title"]}>Materiales Disponibles</h2>
      <select
        onChange={handleMaterialChangeTwo}
        className={styles["sidebar-items"]}
      >
        {uniqueMaterial.map((material, index) => (
          <option key={index} value={material} className={styles["color-option"]}>
            <span
              className={styles["color-square"]}
              style={{ backgroundColor: material }}
            ></span>
            {material}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Material;