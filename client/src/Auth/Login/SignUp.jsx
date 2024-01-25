import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import GMAIL from "../../img/gmail.png";
import styles from "./SignUp.module.css";

function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El campo 'nombre' es requerido"),
      email: Yup.string().email("Dirección de correo invalida").required("Required"),
      password: Yup.string().required("El campo 'password' es requerido")
    }),
  
  });

  return (
    <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h1>Crear Cuenta</h1>
        <div className={styles.socialContainer}>
          <a href="#" className={styles.google}>
          <img src={GMAIL} alt="Gmail" className={styles.google}/>
          </a>
        </div>
        <span>O usa tu coreo</span>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Nombre"
          className={styles.input}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.error}>{formik.errors.name}</div>
        ) : null}
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="📧 Email ... "
          className={styles.input}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.error}>{formik.errors.email}</div>
        ) : null}
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
          className={styles.input}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={styles.error}>{formik.errors.password}</div>
        ) : null}
        <button type="submit" className={styles.btnSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
