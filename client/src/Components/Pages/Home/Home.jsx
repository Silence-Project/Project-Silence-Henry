import React, { useEffect } from "react";
import styles from "./Home.module.css";
import ProductList from "../../Common/ProductList/ProductList";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../../../Redux/Store/Slices/ProductSlice";
import { Link } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";

import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';
import Descuento from '../../Common/Descuento/Descuento'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);

  console.log("PRODUCTOS ->", products);

  // const estilosCss = 'Home'

  return (
    <div className={styles.homeContainer}>

      <Descuento />

      <Header />

      <ProductList className='card' products={products} />

      <Footer />
    </div>
  );
};

export default Home;
