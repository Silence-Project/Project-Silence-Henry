import React, { useState } from "react";
import styles from "./AdminView.module.css";
import CreateProduct from "../../../Auth/CreateProduct/CreateProduct";
import UsersAdmin from "../../usersAdmin/UsersAdmin";
import { Link, useNavigate } from "react-router-dom";
import {ROUTES} from "../../../Helpers/Routes.helper";
import DescuentoAdmin from "../../Common/Descuento/DescuentoAdmin";
import AdminDataViews from "../../../Auth/AdminDataViews/AdminDataViews";
import { useAuth0 } from "@auth0/auth0-react";
import requiereUserBd from "../../../Helpers/requireUserBd";
import Head from "../../Common/Header/Head";



const AdminView = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  const handleCloseCreateProduct = () => {
    setSelectedCard(null);
    // navigate(ROUTES.ADMIN);
    navigate(ROUTES.PROFILE);
  };

  const handleGoToHome = () => {
    navigate(ROUTES.HOME); 
  };

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  if(user) {
    const { email } = user;

    async function traerDataUser() {
      const isRegisterededUser = await requiereUserBd(email);
      console.log('objeto usuario en ADMINVIEW???', isRegisterededUser);
    }
    traerDataUser(); //objeto { id: 1, isActive: true, isAdmin: true }

  } else {
    loginWithRedirect();
  }

  return (
    <div> 
      <Head />
    <div className={styles.containerAdminView}>
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
        ) : selectedCard === "AdminDataViews" ? (
          <AdminDataViews
            handleCloseCreateProduct={handleCloseCreateProduct}
          />
        ) : null}
      </div>
      {selectedCard ? null : (
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
            <div className={styles.card} onClick={() => handleCardClick("AdminDataViews")}>
              <h2>Otro</h2>
              <p>Explica.</p>
            </div>
          </div>
          <button className={styles.btnHome} onClick={handleGoToHome}>Ir a Home</button>
        </>
      )}
    </div>
    </div>
  );
};

export default AdminView;
