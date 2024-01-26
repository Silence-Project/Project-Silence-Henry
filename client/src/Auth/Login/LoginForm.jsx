import styles from "./LoginForm.module.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

const LoginForm = () => {
  return (
    <div className={styles.formContainer}>
      <SignInForm className={styles.signInForm} />
      <SignUpForm className={styles.signUpForm} />
    </div>
  );
};

export default LoginForm;
