import ROUTES from "../../Helpers/Routes.helper";
import { Link } from "react-router-dom";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles.formContainer}>

      <SignInForm className={styles.signInForm} />

      <div className={styles.linkHomeProvitional}>
      <Link to={ROUTES.HOME} style={{ color: 'black' }}>HOME</Link> 
      </div>

      <SignUpForm className={styles.signUpForm} />

    </div>
  );
};

export default LoginForm;
