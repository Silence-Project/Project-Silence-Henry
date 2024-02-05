// import { Link } from "react-router-dom";
// import ROUTES from "../../../Helpers/Routes.helper";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Store/Slices/ProductSlice";
import Head from "../../Common/Header/Head";
import Cards from "../../Common/ProductList/ProductList";
import Footer from "../../Common/FooterView/Footer";
import Descuento from "../../Common/Descuento/Descuento";
import styles from "./Home.module.css";


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const sortedProducts = products.slice().sort((a, b) => a.preference - b.preference);
  
  console.log("PRODUCTOS ->", products);

  return (
    <>
      <div className={styles.homeContainer}>
        <Descuento />

        <Head />
        
        <div className={styles.cardContainer}>
          <Cards className='card' products={sortedProducts}/>
        </div>    

        <Footer/>
      </div>
    </>
  );
};

export default Home;
