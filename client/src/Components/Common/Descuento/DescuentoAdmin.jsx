import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";
import IMGCLOSE from "../../../img/icons/x-mark.png";
import { setDescuento } from "../../../Redux/Store/Slices/AdminSlice";
import styles from "./DescuentoAdmin.module.css";

const DescuentoAdmin = ({ handleCloseCreateProduct }) => {
  const dispatch = useDispatch();
  const [nuevoDescuento, setNuevoDescuento] = useState("");

  const handleChange = (event) => {
    setNuevoDescuento(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:3001/toptext/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nuevoDescuento }),
      });
      if (response.ok) {
        // Actualizar el estado global con el nuevo descuento
        dispatch(setDescuento(nuevoDescuento));
      } else {
        console.error("Error al actualizar el descuento");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud PUT:", error);
    }
  };

  const handleCancel = () => {
    if (typeof handleCloseCreateProduct === "function") {
      handleCloseCreateProduct();
    } else {
      console.error(
        "handleCloseCreateProduct is not a function",
        handleCloseCreateProduct
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnCloseContainer}>
        <img
          src={IMGCLOSE}
          alt="Close"
          className={styles.btnClose}
          onClick={handleCancel}
          style={{ width: "24px", height: "24px", cursor: "pointer" }}
        />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Nuevo Descuento:
          <input
            type="text"
            value={nuevoDescuento}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <button className={styles.button} type="submit">
          Guardar
        </button>
      </form>
      <button className={styles.linkButton}>
        {" "}
        <Link className={styles.link} to={ROUTES.HOME}>
          Inicio
        </Link>{" "}
      </button>
    </div>
  );
};

export default DescuentoAdmin;
