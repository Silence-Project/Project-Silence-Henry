// import { Link } from "react-router-dom";
// import ROUTES from "../../../Helpers/Routes.helper";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Store/Slices/ProductSlice";
import Header from "../../../../src/Components/Common/Header/Header";
import Cards from "../../Common/ProductList/ProductList";
import Footer from "../../Common/Footer/Footer";
import Descuento from "../../Common/Descuento/Descuento";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log("PRODUCTOS ->", products);

  return (
    <div className={styles.homeContainer}>
      <Descuento />
      <Header />
      <div className={styles.cardContainer}>
        <Cards className="card" products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
