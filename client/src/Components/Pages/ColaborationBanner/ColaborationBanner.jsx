import React from "react";
import { Link } from "react-router-dom";
import styles from "./ColaborationBanner.module.css";
import andinocoverphoto1 from "../../../assets/andino/capsula-andino-image(13)-cover.jpeg";


const ColaborationBanner = () => {

  return (
    <div className={styles.bannerContainer}>
      <Link to="/colaboracion">
      <img src={andinocoverphoto1} alt="andino cover photo" />
      </Link>
    </div>
  )
}

export default ColaborationBanner;