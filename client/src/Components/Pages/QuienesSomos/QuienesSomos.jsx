import Head from "../../Common/Header/Head";
import Footer from "../../Common/FooterView/Footer";
// import Descuento from "../../Common/Descuento/Descuento";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import styles from "./Information.module.css";

import { useState, useEffect } from "react";
import axios from "axios";

function QuienesSomos() {
  const [information, setInformation] = useState(null);

  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const response = await axios.get(
          "https://silenceback.onrender.com/informationAboutUs/information"
        );
        setInformation(response.data);
      } catch (error) {
        console.error("Error fetching information:", error);
      }
    };

    fetchInformation();
  }, []);

  return (
    <div>
      <Head />
      <div className={styles.container_information}>
        <div className={styles.frontPage}></div>
        <div>
          <h4>Contact us!</h4>
          <div className={styles.redes}>
            <a
              href="https://www.instagram.com/silencebsas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/SilenceBsAs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@silence.ba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
        <div>
          <h4>About us</h4>
          {information ? <p>{information.aboutUs}</p> : <p>Loading...</p>}
        </div>
        <div>
          <h4>Mission</h4>
          {information ? <p>{information.mision}</p> : <p>Loading...</p>}
        </div>
        <div>
          <h4>Vision</h4>
          {information ? <p>{information.vision}</p> : <p>Loading...</p>}
        </div>
        <div>
          <h4>History</h4>
          {information ? <p>{information.history}</p> : <p>Loading...</p>}
        </div>
        <div>
          <button className={styles.floating_btn}>
            <NavLink to={"/home"}>Back</NavLink>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QuienesSomos;
