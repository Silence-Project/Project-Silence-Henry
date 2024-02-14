import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../../Redux/Store/Slices/ProductSlice";
import styles from "./Size.module.css"; 

  const Size = ({ handleSizeChange }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const [uniqueSize, setUniqueSize] = useState([]);

    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
  
    useEffect(() => {
      if (products && products.length > 0) {
        const sizes = [...new Set(products.map((product) => product.size))];
        setUniqueSize(sizes);
      }
    }, [products]);

  const handleSizeChangeTwo = (event) => {
    handleSizeChange(event.target.value);
    console.log("Talla seleccionada:", event.target.value);
  };

  //
  return (
    <div>
      <h2 className={styles["color-title"]}>Tallas Disponibles</h2>
      <select
        onChange={handleSizeChangeTwo}
        className={styles["sidebar-items"]}
      >
        {uniqueSize.map((size, index) => (
          <option key={index} value={size} className={styles["color-option"]}>
            <span
              className={styles["color-square"]}
              style={{ backgroundColor: size }}
            ></span>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Size;