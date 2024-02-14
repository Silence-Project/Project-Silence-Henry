import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import { getAllUsers } from "../../Redux/Store/Slices/AdminSlice";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import ROUTES from "../../Helpers/Routes.helper";
import IMGCLOSE from "../../img/icons/x-mark.png";
import styles from "./AdminDataViews.module.css";

const AdminDataViews = ({ handleCloseCreateProduct }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.admin.usuarios);
  const [activeCount, setActiveCount] = useState(0);
  const [inactiveCount, setInactiveCount] = useState(0);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    countActiveAndInactiveUsers();
  }, [users]);

  const countActiveAndInactiveUsers = () => {
    let active = 0;
    let inactive = 0;
    users.forEach((user) => {
      if (user.isActive) {
        active++;
      } else {
        inactive++;
      }
    });
    setActiveCount(active);
    setInactiveCount(inactive);
  };

  const donutChartData = {
    labels: ["Usuarios Activos", "Usuarios Retirados"],
    datasets: [
      {
        data: [activeCount, inactiveCount],
        backgroundColor: ["#D3C9C2", "#000"],
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    cutoutPercentage: 70,
    elements: {
      arc: {
        borderWidth: 5,
        borderColor: "#fff",
      },
    },
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
    <div>
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
        <div className={styles.chartContainer}>
          <div className={styles.chartTwo}>
            <Doughnut data={donutChartData} options={donutOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDataViews;
