// import { Link } from "react-router-dom";
// import ROUTES from "../../../Helpers/Routes.helper";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/Store/Slices/ProductSlice";
import Head from "../../Common/Header/Head";
import { unwrapResult } from "@reduxjs/toolkit";
import ProductList from "../../Common/ProductList/ProductList";
import Footer from "../../Common/FooterView/Footer";
import Color from "../../Common/Sidebar/Color/Color";
import Descuento from "../../Common/Descuento/Descuento";
import styles from "./Home.module.css";
import TakeUserData from "../../../Helpers/TakeUserData";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const cardsPerPage = 4;

  useEffect(() => {
    dispatch(getProducts())
      .then(unwrapResult)
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dispatch]);

  const handleColorChange = (color) => {
    console.log(color);
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    console.log(size);
    setSelectedSize(size);
  };

  const handlePriceChange = (price) => {
    console.log(price);
    setSelectedPrice(price);
  };

  const handleMaterialChange = (material) => {
    console.log(material);
    setSelectedMaterial(material);
  };

  const handleCategoryChange = (idCategory) => {
    console.log(idCategory);
    setSelectedCategory(idCategory);
  };

  const sortedProducts = products
    .slice()
    .sort((a, b) => a.preference - b.preference);

  console.log("PRODUCTOS ->", products);

  return (
    <>
      <div className={styles.homeContainer}>
        <Head
          setFilterTerm={setFilterTerm}
          handleColorChange={handleColorChange}
          handleSizeChange={handleSizeChange}
          handlePriceChange={handlePriceChange}
          handleCategoryChange={handleCategoryChange}
          handleMaterialChange={handleMaterialChange}
        />
        <div className={styles.cardContainer}>
          <ProductList
            products={sortedProducts}
            filterTerm={filterTerm}
            cardsPerPage={cardsPerPage}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            selectedPrice={selectedPrice}
            selectedMaterial={selectedMaterial}
            selectedCategory={selectedCategory}
          />
        </div>
        <Footer />
      </div>
      <TakeUserData />
    </>
  );
};

export default Home;
