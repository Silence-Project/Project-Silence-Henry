import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from 'react-redux';
import Cards from "../../Common/ProductList/ProductList"
import { getProducts } from "../../../Redux/Store/Slices/ProductSlice";
import { Link } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import Descuento from '../../Common/Descuento/Descuento'

const Home = () => {
  const dispatch = useDispatch();

const products = useSelector((state) => state.product.products);


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  console.log("PRODUCTOS ->", products);

  // const estilosCss = 'Home'

  return (

    <div className={styles.homeContainer}>

      <Descuento />

      <Header />

        <div className={styles.navbar}>
          <Link to={ROUTES.CREATE_PRODUCT}>Crear Producto</Link>
        </div>

        <div className={styles.navbar}>
          <Link to={ROUTES.LOGGING}>Inicia Sesión</Link>
        </div>
      
      
  

  <div className={styles.cardContainer}>
      <Cards className='card' products={products}/>
</div>
  


    

        <Footer/>
      </div>
    
  );
};

export default Home;
