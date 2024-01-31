import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import GMAIL from "../../img/gmail.png";
import ROUTES from "../../Helpers/Routes.helper";
import styles from "./SignUp.module.css";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signUp } from "../../Redux/Store/Slices/UserSlice";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [error, setError] = useState("");
  const [passwordEnabled, setPasswordEnabled] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      name: "",
      email: "",
      password: "",
      allowPrivacy: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El campo 'nombre' es requerido"),
      email: Yup.string()
      .required("Campo requerido")
      .email("Dirección de correo inválida")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Formato de correo electrónico inválido"
        ),
      password: Yup.string()
        .required("El campo 'password' es requerido")
        .min(5, "La contraseña debe tener al menos 5 caracteres")
        .max(30, "La contraseña no puede tener más de 30 caracteres")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,30}$/,
          "La contraseña debe tener al menos una letra y un número"
        ),

      allowPrivacy: Yup.boolean().oneOf(
        [true],
        "Debes aceptar las condiciones y la política de privacidad"
      ),
    }),

    onSubmit: async (values) => {
      try {
        const { exists, isActive } = await checkEmailExists(values.email);
    
        if (exists) {
          if (isActive) {
            setError("Tu correo electrónico ya está registrado, debes iniciar sesión.");
          } else {
            setError("Tu correo electrónico está registrado pero no está activo. Comunícate con el administrador.");
          }
        } else {
  
          let userCredentials = {
            firstName: values.name,
            name: values.name,
            email: values.email,
            password: values.password,
          };
          const response = await fetch(`http://localhost:3001/usuarios`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userCredentials)
          });
    
          const userData = await response.json();
    console.log(userData)
          // Si se registró 
          if (response.ok) {
            // Obtien el ID del usuario  creado
            const userId = userData.id;
    

            dispatch(signUp(userData));
            navigate(`${ROUTES.REGISTER}${userId}`);

          } else {
            // Manejar errores si la solicitud no fue exitosa
            setError("Hubo un error al registrar el usuario.");
          }
        }
      } catch (error) {
        setError("Error al verificar el correo electrónico: " + error.message);
        console.error("Error durante la verificación del correo electrónico:", error);
      }
    },
    
  });

    const checkEmailExists = async (email) => {
    try {
      const response = await fetch(`http://localhost:3001/usuarios?email=${email}`);
      const data = await response.json();
      
      return {
        exists: data.exists,
        isActive: data.isActive,
      };
    } catch (error) {
      console.error("Error al verificar el correo electrónico:", error);
      return {
        exists: false,
        isActive: false,
      };
    }
  };
  
  
  const handleEmailBlur = async (event) => {
    const { value } = event.target;
    const { exists, isActive } = await checkEmailExists(value);
  
    if (exists) {
      if (!isActive) {
        setError("Tu correo electrónico se encuentra suspendido No puedes iniciar sesión. Comunícate con el administrador.");
      } else {
        setError("Tu correo electrónico ya está registrado, debes iniciar sesión.");
      }
      setPasswordEnabled(false); 
    } else {
      setError(""); 
      setPasswordEnabled(true); 
    }
  };
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
        <div className={styles.inputContainer}>        
        <input
          type={passwordVisible ? "text" : "password"}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Contraseña...✍🏻"
          className={styles.input}
          disabled={!passwordEnabled}
        />
         <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
      </div>

        {formik.touched.password && formik.errors.password ? (
          <div className={styles.error}>{formik.errors.password}</div>
        ) : null}
        {error && <div className={styles.error}>{error}</div>}

      
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

          <button type="submit" className={styles.btnSubmit} disabled={!formik.isValid || !passwordEnabled || !!error} >
            Sign Up
          </button>

          {formik.touched.allowPrivacy && formik.errors.allowPrivacy ? (
            <div className={styles.error}>{formik.errors.allowPrivacy}</div>
          ) : null}
  <div className={styles.btnAndCheck}>
         

        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
