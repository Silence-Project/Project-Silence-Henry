import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
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
      <div className={styles.chartOne}>
        {" "}
        Ventas linea
        <Line
          data={{
            labels: ["Sem 1", "Sem 2", "Sem 3"],
            datasets: [
              {
                label: "Ventas",
                data: [200, 500, 800],
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(54, 162, 235, 1)",
                pointBorderColor: "#fff",
                pointBorderWidth: 1,
                pointRadius: 5,
              },
              {
                label: "Costos",
                data: [50, 120, 600],
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(255, 99, 132, 1)",
                pointBorderColor: "#fff",
                pointBorderWidth: 1,
                pointRadius: 5,
              },
            ],
          }}
        />
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.chartTwo}>
          {" "}
          Ventas en histograma
          <Bar
            data={{
              labels: ["Sem 1", "Sem 2", "Sem 3"],
              datasets: [
                {
                  label: "VENTAS SILENCE",
                  data: [200, 500, 800],
                  borderRadius: 5,
                  borderColor: "rgba(0, 99, 102, 1)",
                  backgroundColor: "rgba(0, 99, 102, 1)",
                  borderWidth: 2,
                  pointBackgroundColor: "rgba(0, 99, 102, 1)",
                  pointBorderColor: "#fff",
                  pointBorderWidth: 1,
                  pointRadius: 5,
                },
                {
                  borderColor: "rgba(255, 99, 132, 1)",
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderWidth: 2,
                  pointBackgroundColor: "rgba(255, 99, 132, 1)",
                  pointBorderColor: "#fff",
                  pointBorderWidth: 1,
                  pointRadius: 5,
                  label: "CANCELACIONES",
                  data: [50, 120, 600],
                },
              ],
            }}
          />{" "}
        </div>
        <div className={styles.chartTree}>
          {"Ventas en tortas"}
          <Doughnut
            data={{
              labels: ["Sem 1", "Sem 2", "Sem 3"],
              datasets: [
                {
                  label: "VENTAS SILENCE",
                  data: [200, 500, 800],
                  borderRadius: 5,
                },
              ],
            }}
          />{" "}
        </div>
      </div>
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
