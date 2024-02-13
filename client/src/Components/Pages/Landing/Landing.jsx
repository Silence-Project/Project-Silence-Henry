import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {ROUTES} from "../../../Helpers/Routes.helper";
import LOGO from "../../../img/silenceImg.png";
import styles from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  
  useEffect(() => {
   
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 3000); 

    return () => {
      clearTimeout(timer);
    };
  }, []); 

  useEffect(() => {
    if (redirect) {
      navigate(ROUTES.HOME);
    }
  }, [redirect, navigate]); 


  return (
    <div className={styles.containerLanding}>
         <div className={`${styles.containerLogo} ${styles.slideInLeft}`}>
        <img src={LOGO} alt="Silence Logo" className={styles.logo} />
      </div>

      <div className={`${styles.welcomeContainer} ${styles.slideInRight}`}>
        <h1 className={`${styles.welcomeMessage} ${styles.fadeIn}`}>
      Bienvenidos <br />  a Silence
        </h1>
      </div>
    </div>
  );
};

export default Landing;
