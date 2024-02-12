import React, { useState, useEffect } from "react";
import Card from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

const ProductList = ({ products, filterTerm, cardsPerPage, selectedColor, selectedSize, selectedPrice, selectedCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * cardsPerPage;
  const indexOfFirstItem = indexOfLastItem - cardsPerPage;

  let filteredProducts = [...products];

  if (filterTerm) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
  }

  if (selectedColor) {
    filteredProducts = filteredProducts.filter(
      (product) => product.color.toLowerCase() === selectedColor.toLowerCase()
    );
  }

  if (selectedSize) {
    filteredProducts = filteredProducts.filter(
      (product) => product.size.toLowerCase() === selectedSize.toLowerCase()
    );
  }

  // if (selectedPrice) {
  //   filteredProducts = filteredProducts.filter(
  //     (product) => product.price.toLowerCase() === selectedPrice.toLowerCase()
  //   );
  // }

  if (selectedPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => String(product.price).toLowerCase() === String(selectedPrice).toLowerCase()
    );
  }

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.size.toLowerCase() === selectedCategory.toLowerCase()
    );
  }
  

  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterTerm, selectedColor, selectedSize, selectedPrice]);

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
