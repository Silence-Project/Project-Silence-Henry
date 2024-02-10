import React, { useState } from "react";
import styles from "./AdminView.module.css";
import CreateProduct from "../../../Auth/CreateProduct/CreateProduct";
import UsersAdmin from "../../usersAdmin/UsersAdmin";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";
import DescuentoAdmin from "../../Common/Descuento/DescuentoAdmin";

const AdminView = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  const handleCloseCreateProduct = () => {
    setSelectedCard(null);
    navigate(ROUTES.ADMIN);
  };

  const handleGoToHome = () => {
    navigate(ROUTES.HOME); 
  };

  return (
    <div className={styles.containerAdminView}>
      {selectedCard ? (
        <div className={styles.CreateProduct}>
          {selectedCard === "createProduct" ? (
            <CreateProduct
              handleCloseCreateProduct={handleCloseCreateProduct}
            />
          ) : selectedCard === "adminUsers" ? (
            <UsersAdmin handleCloseCreateProduct={handleCloseCreateProduct} />
          ) : selectedCard === "adminDescuento" ? (
            <DescuentoAdmin
              handleCloseCreateProduct={handleCloseCreateProduct}
            />
          ) : null}
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
            <div
              className={styles.card}
              onClick={() => handleCardClick("adminDescuento")}
            >
              <h2>Ediciones de información</h2>
              <p>Explica.</p>
            </div>
            <div className={styles.card}>
              <h2>Otro</h2>
              <p>explica.</p>
            </div>
          </div>
        </>
      )}
       <button className={styles.btnHome} onClick={handleGoToHome}>Ir a Home</button>
    </div>
  );
};

export default AdminView;
