import React, { useState } from "react";
import styles from "./AdminView.module.css";
import CreateProduct from "../../../Auth/CreateProduct/CreateProduct";
import UsersAdmin from "../../usersAdmin/UsersAdmin";

const AdminView = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  const handleCloseCreateProduct = () => {
    setSelectedCard(null);
  };
  
  return (
    <div className={styles.containerAdminView}>
      {selectedCard ? (
        <div className={styles.CreateProduct}>
          {selectedCard === "createProduct" ? (
            <CreateProduct handleCloseCreateProduct={handleCloseCreateProduct}
            />
            ) : (
              <UsersAdmin handleCloseCreateProduct={handleCloseCreateProduct}/>
              )}
        </div>
      ) : (
        <>
          <div className={styles.row}>
            <div
              className={styles.card}
              onClick={() => handleCardClick("createProduct")}
              
              >
              <h2>Creación de productos & Categorías</h2>
              <p>Creación de colecciones Silence.</p>
            </div>
            <div
              className={styles.card}
              onClick={() => handleCardClick("adminUsers")}
            >
              <h2>Administración de usuario</h2>
              <p>Estado de usuarios, compras, etc</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.card}>
              <h2>No se</h2>
              <p>Explica.</p>
            </div>
            <div className={styles.card}>
              <h2>Otro</h2>
              <p>explica.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminView;
