import { Link } from "react-router-dom";
import UserPersonalData from "../../../Auth/UserPersonalData/UserPersonalData";
import styles from "./userRegister.module.css";
import ROUTES from "../../../Helpers/Routes.helper";



const UserRegister = () => {
  return (
    <>
<div className={styles.containeruserView}>
  <Link to={ROUTES.HOME} style={{ color: 'black' }}>HOME</Link> 
</div>


<div>
  <div className={styles.containeruserRegister}>
    <UserPersonalData  />
  </div>
</div>

    </>
  );
};

export default UserRegister;