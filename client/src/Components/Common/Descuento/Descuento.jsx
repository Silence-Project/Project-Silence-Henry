// Descuento.js
import React from "react";
import { useSelector } from "react-redux";
import styles from "./Descuento.module.css";

const Descuento = () => {
  const descuento = useSelector((state) => state.admin.descuento);

  return (
    <div className={styles.topMessage}>
      <h2> {descuento}</h2>

    </div>
  );
};

export default Descuento;
