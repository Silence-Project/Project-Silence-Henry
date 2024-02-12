import React, { useState, useEffect } from "react";
import axios from "axios"; // Importa Axios
import URLTOCHANGE from "../../../Helpers/routesToChange";
import styles from "./Descuento.module.css";

const Descuento = () => {
  const [mensaje, setMensaje] = useState(null);

  useEffect(() => {
    axios
      .get(`${URLTOCHANGE.theUrl}/toptext/texts`)
      .then((response) => {
        console.log("RTA MSJE", response);
        setMensaje(response.data[0].description);
        console.log("RTA MSJE2", mensaje);
      })
      .catch((error) => {
        console.error("Error al obtener el mensaje:", error);
      });
  }, []);

  return (
    <div className={styles.topMessage}>
      <h2>{mensaje}</h2>
    </div>
  );
};

export default Descuento;
