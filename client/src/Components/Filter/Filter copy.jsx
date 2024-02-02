import React from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <h3>Filtrar por:</h3>
      <div className={styles.ratingFilter}>
        <label htmlFor="rating">Rating:</label>
        <select id="rating">
          <option value="1">1 estrella</option>
          <option value="2">2 estrellas</option>
          <option value="3">3 estrellas</option>
          <option value="4">4 estrellas</option>
          <option value="5">5 estrellas</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
