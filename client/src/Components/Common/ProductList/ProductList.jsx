import React from "react";
import Card from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

const ProductList = ({ products, filterTerm }) => {
  console.log("PRODUCTOS EN PRODUCTLIST ->", products);
  console.log("TERM DE FILTRO ->", filterTerm);

  let filteredProducts = [...products];

  if (filterTerm) {
    console.log("ENTRO A FILTRAR...");
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
  }

  console.log("PRODUCTOS FILTRADOS ->", filteredProducts);

  if (!filteredProducts.length) {
    return (
      <div className={styles.productList}>
        <p className={styles.cargandoDatos}>Cargando datos...</p>
      </div>
    );
  }

  return (
    <div className={styles.productList}>
      {filteredProducts.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
