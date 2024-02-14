import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";
import URLTOCHANGE from "../../../Helpers/routesToChange";
import IMGCLOSE from "../../../img/icons/x-mark.png";
import { updateMsj, getTopMsj } from "../../../Redux/Store/Slices/AdminSlice";
import styles from "./DescuentoAdmin.module.css";
import Descuento from "./Descuento";

const DescuentoAdmin = ({ handleCloseCreateProduct }) => {
  const dispatch = useDispatch();
  const [nuevoDescuento, setNuevoDescuento] = useState("");
  const [mostrarCargaCorrecta, setMostrarCargaCorrecta] = useState(false);

  const handleChange = (event) => {
    setNuevoDescuento(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Submitting form...");
      const response = await fetch(`${URLTOCHANGE.theUrl}/toptext/1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: nuevoDescuento }),
      });
      if (response.ok) {
        console.log("Mensaje actualizado con éxito");
        dispatch(updateMsj());
        dispatch(getTopMsj());
        setMostrarCargaCorrecta(true);
        setTimeout(() => {
          setMostrarCargaCorrecta(false);
          handleCloseCreateProduct();
        }, 5000);
      } else {
        console.error("Error al actualizar el mensaje");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud PUT:", error);
    }
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    if (typeof handleCloseCreateProduct === "function") {
      handleCloseCreateProduct();
    } else {
      console.error(
        "handleCloseCreateProduct is not a function",
        handleCloseCreateProduct
      );
    }
  };

  console.log("Rendering DescuentoAdmin component...");

  return (
    <div className={styles.container}>
      <div className={styles.headerMsj}>
        <p>
          Mensaje cabecera:
          <Descuento />
        </p>
      </div>

      <div className={styles.btnCloseContainer}>
        <img
          src={IMGCLOSE}
          alt="Close"
          className={styles.btnClose}
          onClick={handleCancel}
        />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Nuevo mensaje:
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
      {mostrarCargaCorrecta && (
        <div className={styles.cargaCorrecta}>Carga correcta</div>
      )}
    </div>
  );
};

export default DescuentoAdmin;
