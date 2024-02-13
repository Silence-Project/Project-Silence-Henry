import React, { useState, useEffect } from "react";
import Card from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

import styles from './ProductList.module.css'

import { NavLink } from 'react-router-dom';
import ROUTES from '../../../Helpers/Routes.helper';

const ProductList = ({ products, filterTerm, cardsPerPage, selectedColor }) => {
  const [currentPage, setCurrentPage] = useState(1);

<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import ROUTES from '../../../Helpers/Routes.helper';
=======
  const indexOfLastItem = currentPage * cardsPerPage;
  const indexOfFirstItem = indexOfLastItem - cardsPerPage;
>>>>>>> main

  let filteredProducts = [...products];

<<<<<<< HEAD
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
        <NavLink to={ROUTES.HOME}>
          <button className="botondetail">Go Home</button>
        </NavLink>   
      </div>   
=======
  if (filterTerm) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(filterTerm.toLowerCase())
>>>>>>> main
    );
  }

  if (selectedColor) {
    filteredProducts = filteredProducts.filter(
      (product) => product.color.toLowerCase() === selectedColor.toLowerCase()
    );
  }

  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterTerm, selectedColor]);

  return (
    <div className={styles.productList}>
      {currentItems.map((product) => (
        <Card product={product} key={product.id} />
      ))}
      <div className={styles.pagination}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentItems.length < cardsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
