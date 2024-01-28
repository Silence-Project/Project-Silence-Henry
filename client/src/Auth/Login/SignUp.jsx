import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import GMAIL from "../../img/gmail.png";
import ROUTES from "../../Helpers/Routes.helper";
import styles from "./SignUp.module.css";
import { useDispatch } from "react-redux";
import { signUp } from "../../Redux/Store/Slices/UserSlice";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [error, setError] = useState("");
  const [passwordEnabled, setPasswordEnabled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      allowPrivacy: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El campo 'nombre' es requerido"),
      email: Yup.string()
        .email("Dirección de correo inválida")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Formato de correo electrónico inválido"
        )
        .required("Campo requerido"),
      password: Yup.string()
        .required("El campo 'password' es requerido")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/,
          "La contraseña debe tener al menos una letra y un número"
        )
        .min(3, "La contraseña debe tener al menos 3 caracteres")
        .max(30, "La contraseña no puede tener más de 30 caracteres"),
      allowPrivacy: Yup.boolean().oneOf(
        [true],
        "Debes aceptar las condiciones y la política de privacidad"
      ),
    }),

    onSubmit: async (values) => {
      try {
        const emailExists = await checkEmailExists(values.email);
        if (emailExists) {
          setError("Tu correo electrónico ya está registrado, debes iniciar sesión");
        } else {
          let userCredentials = {
            name: values.name,
            email: values.email,
            password: values.password,
          };
          await dispatch(signUp(userCredentials));
          navigate(ROUTES.REGISTER);
        }
      } catch (error) {
        setError("Error al registrar el usuario: " + error.message);
        console.error("Error durante el registro:", error);
      }
    },
  });

  const checkEmailExists = async (email) => {
    try {
      const response = await fetch(`http://localhost:3001/usuarios?email=${email}`);
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error("Error al verificar el correo electrónico:", error);
      return false;
    }
  };

  const handleEmailBlur = async (event) => {
    const { value } = event.target;
    const emailExists = await checkEmailExists(value);
    if (emailExists) {
      setError("Tu correo electrónico ya está registrado, debes iniciar sesión");
    } else {
      setError("");
      setPasswordEnabled(true);
    }
  };

  return (
    <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h1>Crear Cuenta</h1>
        <div className={styles.socialContainer}>
          <a href="#" className={styles.google}>
            <img src={GMAIL} alt="Gmail" className={styles.google} />
          </a>
        </div>
        <span>O usa tu correo</span>
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
          onBlur={handleEmailBlur}
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
          disabled={!passwordEnabled}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={styles.error}>{formik.errors.password}</div>
        ) : null}
        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.btnAndCheck}>
          <button type="submit" className={styles.btnSubmit} disabled={!formik.isValid || !passwordEnabled || !!error} >
            Sign Up
          </button>

          <input
            type="checkbox"
            name="allowPrivacy"
            checked={formik.values.allowPrivacy}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.checkbox}
          />
          <label htmlFor="allowPrivacy" className={styles.checkboxLabel}>
            He leído y acepto las condiciones y la política de privacidad
          </label>
          {formik.touched.allowPrivacy && formik.errors.allowPrivacy ? (
            <div className={styles.error}>{formik.errors.allowPrivacy}</div>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
