
import React from 'react'

import Card from "../ProductCard/ProductCard";

import styles from './ProductList.module.css'


const ProductList = ({ products }) => {

  console.log("PRODUCTOS EN PRODUCTLIST ->", products);

  if (Array.isArray(products)) {
    if (products.length === 0) {
      return (
        <div className={styles.productList}>
          <p className={styles.cargandoDatos}>Cargando datos...</p>
        </div>
      );
    }
    return (
      <div className={styles.productList}>
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    );
  } else if (typeof products === 'object') {
    return (
      <div className={styles.productList}>
        <Card product={products} key={products.id} />
      </div>
    );

  } else {
    return (
      <div className={styles.productList}>
        <p>No se encontraron productos en la base de datos.</p>
      </div>
    );
  }
};

export default ProductList;
