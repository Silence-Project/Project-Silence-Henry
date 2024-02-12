// SearchBar.jsx

import React from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../../../../img/icons/search.png";

const SearchBar = ({ setFilterTerm }) => {
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.trim();
    setFilterTerm(searchTerm);
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
