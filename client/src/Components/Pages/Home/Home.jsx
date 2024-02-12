// import { Link } from "react-router-dom";
// import ROUTES from "../../../Helpers/Routes.helper";

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../../Redux/Store/Slices/ProductSlice";
// import Head from "../../Common/Header/Head";
// import { unwrapResult } from "@reduxjs/toolkit";
// import ProductList from "../../Common/ProductList/ProductList";
// import Footer from "../../Common/FooterView/Footer";
// import Color from "../../Common/Sidebar/Color/Color";
// import Descuento from "../../Common/Descuento/Descuento";

// import styles from "./Home.module.css";

// const Home = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.product.products);
//   const [selectedColor, setSelectedColor] = useState("");
//   const [filterTerm, setFilterTerm] = useState("");
//   const cardsPerPage = 5;

//   useEffect(() => {
//     dispatch(getProducts())
//       .then(unwrapResult)
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, [dispatch]);

//   const handleColorChange = (color) => {
//     console.log(color)
//     setSelectedColor(color);
//   };

//   if(products.length === 0) {
//     return <div>Cargando...</div>;
//   } 
  

//   const sortedProducts = products
//     .slice()
//     .sort((a, b) => a.preference - b.preference);

//   console.log("PRODUCTOS ->", products);






//   return (
//     <>
//       <div className={styles.homeContainer}>
        
//         <Head
//           setFilterTerm={setFilterTerm}
//           handleColorChange={handleColorChange}
//         />
//         <div className={styles.cardContainer}>
//           <ProductList
//             products={sortedProducts}
//             filterTerm={filterTerm}
//             cardsPerPage={cardsPerPage}
//             selectedColor={selectedColor}
//           />
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Home;

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

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [selectedColor, setSelectedColor] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const cardsPerPage = 5;

  useEffect(() => {
    dispatch(getProducts())
      .then(unwrapResult)
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [dispatch]);

  const handleColorChange = (color) => {
    console.log(color)
    setSelectedColor(color);
  };



  const sortedProducts = products
    // .slice()
    // .sort((a, b) => a.preference - b.preference);


    
  console.log("PRODUCTOS ->", products);

  return (
    <>
      <div className={styles.homeContainer}>

        <Head
          setFilterTerm={setFilterTerm}
          handleColorChange={handleColorChange}
        />
        <div className={styles.cardContainer}>
          <ProductList
            products={sortedProducts}
            filterTerm={filterTerm}
            cardsPerPage={cardsPerPage}
            selectedColor={selectedColor}
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;