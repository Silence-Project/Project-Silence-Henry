import React, { useState } from "react";
import URLTOCHANGE from "../../Helpers/routesToChange";
import axios from "axios";
import styles from "./CreateCategoryModal.module.css";

const CreateCategoryModal = ({ onClose, reloadCategories }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // await axios.post(`${URLTOCHANGE}/categories/new`, {
        await axios.post(`http://127.0.0.1:3001/categories/new`, {
        name: categoryName,
      });
      onClose();
      reloadCategories();
    } catch (error) {
      console.error("Error al crear la categoría:", error);
    }
  };

  const handleChange = (event) => {
    setCategoryName(event.target.value);
  };

  return (
    <>
      <div className={styles.containerCreateCategoryModal}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <h2>Crear Categoría Silence:</h2>
            <input
              type="text"
              value={categoryName}
              onChange={handleChange}
              className={styles.inputCat}
              placeholder="Ingrese el nombre de la categoría"
              required
            />
          </div>
          <div className={styles.buttons}>
            <button type="submit">Crear Categoría</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCategoryModal;
