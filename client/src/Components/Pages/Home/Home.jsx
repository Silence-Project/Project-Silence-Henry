// import { Link } from "react-router-dom";
// import ROUTES from "../../../Helpers/Routes.helper";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Store/Slices/ProductSlice";
import Head from "../../Common/Header/Head";
import { unwrapResult } from "@reduxjs/toolkit";
import ProductList from "../../Common/ProductList/ProductList"; 
import Footer from "../../Common/FooterView/Footer";
import Descuento from "../../Common/Descuento/Descuento";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    dispatch(getProducts())
      .then(unwrapResult)
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dispatch]);

  const sortedProducts = products
    .slice()
    .sort((a, b) => a.preference - b.preference);

  console.log("PRODUCTOS ->", products);

  return (
    <>
      <div className={styles.homeContainer}>
        <Descuento />

        <Head setFilterTerm={setFilterTerm} />

        <div className={styles.cardContainer}>
          <ProductList products={sortedProducts} filterTerm={filterTerm} /> {/* Pasar filterTerm */}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;

