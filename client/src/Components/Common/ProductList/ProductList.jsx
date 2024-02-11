// ProductList.js
import React, { useState, useEffect } from "react";
import Card from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

const ProductList = ({ products, filterTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Cantidad de elementos por página

  // Calcula los índices del primer y último elemento en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filtra los productos según el término de búsqueda
  let filteredProducts = [...products];
  if (filterTerm) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
  }

  // Obtiene los productos a mostrar en la página actual
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Maneja cambios en el término de filtro
  useEffect(() => {
    setCurrentPage(1); // Resetea a la primera página cuando cambia el término de filtro
  }, [filterTerm]);

  return (
    <div className={styles.productList}>
      {currentItems.map((product) => (
        <Card product={product} key={product.id} />
      ))}
      {/* Controles de paginación */}
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
          disabled={filteredProducts.length <= indexOfLastItem}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
