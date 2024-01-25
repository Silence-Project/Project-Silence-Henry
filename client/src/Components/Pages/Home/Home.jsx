import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";
import styles from "./Home.module.css";
import Cards from "../../Common/ProductList/ProductList";
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

  const dispatch = useDispatch();
  
  const Products = useSelector((state) => state.products)


  return (
    <>
<div className={styles.homeContainer}> 
      <div className={styles.topMessage}>
        20% de descuento por pago en efectivo
      </div>


      <div className={styles.navbar}>
      <Link to={ROUTES.LOGGING}>Registro</Link>
      </div>

     
      <div className={styles.cardContainer}>
      {/* {Products.map((card) => (
        <Cards key={card.id} products={card} />
      ))} */}

      
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
