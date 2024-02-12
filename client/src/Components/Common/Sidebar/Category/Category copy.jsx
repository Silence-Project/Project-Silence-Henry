import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../../Redux/Store/Slices/ProductSlice";
import styles from "./Category.module.css"; 

const Category = ({ handleCategoryChange }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [uniqueCategory, setUniqueCategory] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const categories = [...new Set(products.map((product) => product.idCategory))];
      setUniqueCategory(categories);
    }
  }, [products]);

  const handleCategoryChangeTwo = (event) => {
    handleCategoryChange(event.target.value);
    console.log("Categoria seleccionado:", event.target.value);
  };

  return (
    <div>
      <h2 className={styles["color-title"]}>Categorias Disponibles</h2>
      <select
        onChange={handleCategoryChangeTwo}
        className={styles["sidebar-items"]}
      >
        {uniqueCategory.map((idCategory, index) => (
          <option key={index} value={idCategory} className={styles["color-option"]}>
            <span
              className={styles["color-square"]}
              style={{ backgroundColor: idCategory }}
            ></span>
            {idCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
