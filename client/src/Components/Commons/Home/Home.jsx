import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
<div className={styles.homeContainer}> 
      <div className={styles.topMessage}>
        20% de descuento por pago en efectivo
      </div>


      <div className={styles.navbar}>
        navBar
      </div>

      {/* Div medio para cards */}
      <div className={styles.cardContainer}>
      cardsHome
      </div>

      {/* Div bajo para Footer */}
      <div className={styles.footer}>
       footer
      </div>
      </div>

    </>
  );
};

export default Home;
