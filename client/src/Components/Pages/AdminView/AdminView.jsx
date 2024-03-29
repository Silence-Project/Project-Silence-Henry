import React, { useState } from "react";
import styles from "./AdminView.module.css";
import CreateProduct from "../../../Auth/CreateProduct/CreateProduct";
import UsersAdmin from "../../usersAdmin/UsersAdmin";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import ROUTES from "../../../Helpers/Routes.helper";
import DescuentoAdmin from "../../Common/Descuento/DescuentoAdmin";
import AdminDataViews from "../../../Auth/AdminDataViews/AdminDataViews";
import Footer from "../../Common/FooterView/Footer";
import Editproduct from "../../Common/editProduct/editproduct";


const AdminView = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);

  const currentUser = useSelector((state) => state.user.user);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  const handleCloseCreateProduct = () => {
    setSelectedCard(null);
    navigate(ROUTES.PROFILE);
  };

  const handleGoToHome = () => {
    navigate(ROUTES.HOME);
  };

  const { user, loginWithRedirect } = useAuth0();

  if (!user) loginWithRedirect();

  return !currentUser.isAdmin ? (
    <span>
      Necesitas permiso de administrador.
      {setTimeout(() => {
        navigate("/home");
      }, 3000)}
    </span>
  ) : (
    <div>
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
          ) : selectedCard === "editProduct" ? (
            <Editproduct
              handleCloseCreateProduct={handleCloseCreateProduct}
            />
          ) : null}
        </div>
        {selectedCard ? null : (
          <>
            <div className={styles.cardsContainer}>
              <div
                className={`${styles.card} ${
                  selectedCard === "createProduct" ? styles.createProduct : ""
                }`}
                onClick={() => handleCardClick("createProduct")}
              >
                <h2>Creación de productos & Categorías</h2>
                <p>Creación de colecciones Silence.</p>
              </div>
              <div
                className={`${styles.card} ${
                  selectedCard === "adminUsers" ? styles.adminUsers : ""
                }`}
                onClick={() => handleCardClick("adminUsers")}
              >
                <h2>Administración de usuario</h2>
                <p>Estado de usuarios, carrito</p>
              </div>
              <div
                className={`${styles.card} ${
                  selectedCard === "adminDescuento" ? styles.adminDescuento : ""
                }`}
                onClick={() => handleCardClick("adminDescuento")}
              >
                <h2>Top Mensaje</h2>
                <p>Mensaje top para descuento.</p>
              </div>
              <div
                className={`${styles.card} ${
                  selectedCard === "AdminDataViews" ? styles.AdminDataViews : ""
                }`}
                onClick={() => handleCardClick("AdminDataViews")}
              >
                <h2>Estadísticas</h2>
                <p>Usuarios activos, inactivos, carrito y cantidad de producto.</p>
              </div>
            </div>
          </>
        )}
           <Link to={ROUTES.HOME}>Ir a Home</Link>
      </div>
      <Footer />
    </div>
  );
};

export default AdminView;
