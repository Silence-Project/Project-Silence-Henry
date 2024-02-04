// import { Link } from "react-router-dom";
// import ROUTES from "../../../Helpers/Routes.helper";

import Footer from '../../Common/FooterView/Footer';
import Descuento from '../../Common/Descuento/Descuento'
import Sidebar from "../../Common/Sidebar/Sidebar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Store/Slices/ProductSlice";
import Head from "../../Common/Header/Head";
import Cards from "../../Common/ProductList/ProductList";
import Footer from "../../Common/FooterView/Footer";
import Descuento from "../../Common/Descuento/Descuento";
import Sidebar from "../../Common/Sidebar/Sidebar"
// import Filter from "../../Common/Filters/Filters";

import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log("PRODUCTOS ->", products);

  return (
    <>
      <div className={styles.homeContainer}>
        <Descuento />

        <Head />

        <Sidebar />
        
        <div className={styles.cardContainer}>
          <Cards className='card' products={products}/>
        </div>    

        <Footer/>
      </div>
      <Footer />
      <Sidebar />
    </div>
  );
};

export default Home;
