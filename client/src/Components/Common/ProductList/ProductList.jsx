import React, { useState, useEffect } from "react";
import Card from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

const ProductList = ({ products, filterTerm, cardsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * cardsPerPage;
  const indexOfFirstItem = indexOfLastItem - cardsPerPage;

  let filteredProducts = [...products];
  if (filterTerm) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
  }

  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterTerm]);

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
