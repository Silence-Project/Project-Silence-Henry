// import { Link } from "react-router-dom";
// import ROUTES from "../../../Helpers/Routes.helper";

<<<<<<< HEAD
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import Descuento from '../../Common/Descuento/Descuento'
import Sidebar from "../../Common/Sidebar/Sidebar";
=======
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Store/Slices/ProductSlice";
import Head from "../../Common/Header/Head";
import Cards from "../../Common/ProductList/ProductList";
import Footer from "../../Common/FooterView/Footer";
import Descuento from "../../Common/Descuento/Descuento";
import styles from "./Home.module.css";
>>>>>>> 48dfbdee2f5190d5338d762fc278ccb6efb1efd4

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log("PRODUCTOS ->", products);

  return (
<<<<<<< HEAD
    <>
      <div className={styles.homeContainer}>
        <Descuento />

        <Header />

        <Sidebar />
        
        <div className={styles.cardContainer}>
          <Cards className='card' products={products}/>
        </div>    

        <Footer/>
=======
    <div className={styles.homeContainer}>
      <Descuento />
      <Head />
      <div className={styles.cardContainer}>
        <Cards className="card" products={products} />
>>>>>>> 48dfbdee2f5190d5338d762fc278ccb6efb1efd4
      </div>
      <Footer />
    </div>
  );
};

export default Home;
