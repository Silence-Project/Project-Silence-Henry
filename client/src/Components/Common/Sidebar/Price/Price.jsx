import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../../Redux/Store/Slices/ProductSlice";
import styles from "./Price.module.css"; 

const Price = ({ handlePriceChange }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [uniquePrice, setUniquePrice] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products.length > 0) {
      const prices = [...new Set(products.map((product) => product.price))];
      setUniquePrice(prices);
    }
  }, [products]);

  const handlePriceChangeTwo = (event) => {
    handlePriceChange(event.target.value);
    console.log("Precio seleccionado:", event.target.value);
  };

  return (
    <div>
      <h2 className={styles["color-title"]}>Precios Disponibles</h2>
      <select
        onChange={handlePriceChangeTwo}
        className={styles["sidebar-items"]}
      >
        {uniquePrice.map((price, index) => (
          <option key={index} value={price} className={styles["color-option"]}>
            <span
              className={styles["color-square"]}
              style={{ backgroundColor: price }}
            ></span>
            {price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Price;
