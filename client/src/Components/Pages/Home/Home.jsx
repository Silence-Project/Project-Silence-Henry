import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";

import styles from "./Home.module.css";

import Cards from "../../Common/ProductList/ProductList";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../../Redux/Store/Slices/ProductSlice";



import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

 


  const products = useSelector((state) => state.product.products);

  console.log("PRODUCTOS ->", products);

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.topMessage}>
          20% de descuento por pago en efectivo
        </div>

        <Header/>

        <div className={styles.navbar}>
          <Link to={ROUTES.LOGGING}>Registro</Link>
        </div>

        <div className={styles.navbar}>
          <Link to={ROUTES.CREATE_PRODUCT}>Crear Producto</Link>
        </div>

        <div className={styles.cardContainer}>

              <Cards className='card'
              products={products}
            />
         
        </div>

        <Footer/>
      </div>
    </>
  );
};

export default Home;
