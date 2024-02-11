// SearchBar.jsx

import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../../../img/icons/search.png";

const SearchBar = ({ setFilterTerm }) => {
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.trim(); // Obtener el valor del campo de búsqueda y eliminar espacios en blanco al principio y al final
    setFilterTerm(searchTerm); // Actualizar el término de búsqueda
  };

  return (
    <div className={styles.containerSearchBar}>
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Buscar por nombre..."
        className={styles.inputSearch}
      />
      <img src={searchIcon} alt="search" className={styles.search} />
    </div>
  );
};

export default SearchBar;
