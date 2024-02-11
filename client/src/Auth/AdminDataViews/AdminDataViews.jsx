import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Text, DonutChart } from "@tremor/react";
import ROUTES from "../../Helpers/Routes.helper";
import IMGCLOSE from "../../img/icons/x-mark.png";
import styles from "./AdminDataViews.module.css";

const AdminDataViews = ({ handleCloseCreateProduct }) => {
  const dispatch = useDispatch();
  const [stateVariable, setstateVariable] = useState();

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
      <Card>
        <Text> VENTAS </Text>
        <DonutChart variant="pie" onValueChange={(v) => console.log(v)} />
      </Card>
      <button className={styles.linkButton}>
        {" "}
        <Link className={styles.link} to={ROUTES.HOME}>
          Inicio
        </Link>{" "}
      </button>
    </div>
  );
};

export default AdminDataViews;
