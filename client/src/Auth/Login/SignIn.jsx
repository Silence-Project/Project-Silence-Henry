import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import GMAIL from "../../img/gmail.png";
import styles from "./SignIn.module.css";

function SignInForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Dirección de correo invalida").required("Campo requerido"),
      password: Yup.string().required("Campo requerido")
    }),

  });

  return (
    <div className={`${styles.formContainer} ${styles.signInContainer}`}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h1>Iniciar Sesión</h1>
        <div className={styles.socialContainer}>
          <a href="#" className={styles.google}>
          <img src={GMAIL} alt="Gmail" className={styles.google}/>
          </a>
        </div>
        <span>o usa tu cuenta</span>
        <input
          type="email"
          placeholder="📧 Email ... "
          name="email"
          className={styles.input}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.error}>{formik.errors.email}</div>
        ) : null}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={styles.error}>{formik.errors.password}</div>
        ) : null}
        <a className={styles.forgotPassword} href="#">Olvidé mi password</a>
        <button className={styles.btnSubmit} type="submit">Iniciar</button>
      </form>
    </div>
  );
}

export default SignInForm;

