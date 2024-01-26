import { Link } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";
import styles from "./Home.module.css";
import Cards from "../../Common/ProductList/ProductList";
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../Common/Header/Header'
import Footer from '../../Common/Footer/Footer'

import { getProducts } from "../../../Redux/Store/Actions/Products";

const Home = () => {

  const dispatch = useDispatch();
  
  const Products = useSelector((state) => state.products)


  const currentProducts = Array.isArray(Products) ? Products.slice(indexOfFirstVideogame, indexOfLastVideogame) : [Products];


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

     
      <div className={styles.cardContainer}>
      {currentProducts?.map((card) => (
        <Cards key={card.id} products={card} />
      ))}
      
      </div>
      
        {/* <div className={styles.cardContainer}>
        cardsHome
        </div> */}

        <Footer/>

      </div>

    </>
  );
};

export default Home;
