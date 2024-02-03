import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserPersonalData from "../../../Auth/UserPersonalData/UserPersonalData";
import styles from "../userRegister/UserRegister.module.css";
import ROUTES from "../../../Helpers/Routes.helper";
import { useParams } from "react-router-dom";
import Navbar from "../../../Auth/UserPersonalData/NavBar/NavBar";

const UserRegister = () => {
  const { id } = useParams();
  const [showPersonalData, setShowPersonalData] = useState(false);
  return (
    <>
      <div className={styles.containeruserView}>
        <Navbar setShowPersonalData={setShowPersonalData} />
        <div className={styles.content}>
          {showPersonalData && <UserPersonalData  id={id} />}
        </div>
      </div>
    </>
  );
};

export default UserRegister;
