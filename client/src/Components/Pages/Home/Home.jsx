import { Link } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";
import styles from "./Home.module.css";

import Header from '../../Common/Header/Header'
import Footer from '../../Common/Footer/Footer'

const Home = () => {
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
        cardsHome
        </div>

        <Footer/>

      </div>

    </>
  );
};

export default Home;
