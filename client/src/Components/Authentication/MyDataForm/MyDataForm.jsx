import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../Redux/Store/Slices/UserSlice";
import { useParams } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./MyDataForm.module.css";

function MyDataForm({ currentUser }) {

  // const [currentUser, setcurrentUser] = useState(null);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const { id } = currentUser;

  useEffect(() => {
    if (currentUser) {
      formik.setValues({
        firstName: currentUser.firstName || "",
        lastName: currentUser.lastName || "",
        // ageUser: currentUser.ageUser || "",
        dniUser: currentUser.dniUser || "",
        phoneNumber: currentUser.phoneNumber || "",
        dateOfBirth: currentUser.dateOfBirth || "",
        password: currentUser.password || "",
        email: currentUser.email || "",
        // address: currentUser.address || "",
        // city: currentUser.city || "",
        // postalCode: currentUser.postalCode || "",
      });
    }
  }, [currentUser]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      // ageUser: "",
      dniUser: "",
      phoneNumber: "",
      dateOfBirth: "",
      password: "",
      email: "",
      // address: "",
      // city: "",
      // postalCode: "",
    },

    validationSchema: Yup.object({
      dniUser: Yup.string(),
      phoneNumber: Yup.string(),
      dateOfBirth: Yup.date(),
      email: Yup.string()
        .email("Dirección de correo inválida")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Formato de correo electrónico inválido"
        ),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/,
          "La contraseña debe tener al menos una letra y un número"
        )
        .min(3, "La contraseña debe tener al menos 3 caracteres")
        .max(30, "La contraseña no puede tener más de 30 caracteres"),
      // address: Yup.string(),
      // city: Yup.string(),
      // postalCode: Yup.string(),
    }),

    onSubmit: (values, actions) => {
      console.log('que son values??? ', values);
      console.log('y que son actions??', actions);

      // try {
      //   dispatch(updateUser({id, values}));
      //   actions.setSubmitting(false); 
        
      // } catch (error) {
      //   console.error("Error al enviar los datos:", error);
      //   setError("Error al enviar los datos: " + error.message);
      // }

      try {
        dispatch(updateUser({ id, values }));
        actions.setSubmitting(false); 
      } catch (error) {
        setError("Error al enviar los datos: " + error.message);
        console.error("Error al enviar los datos:", error);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    // <div
    //   className={`${styles.formContainer} ${styles.userPersonalDataContainer}`}
    // >
      <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e); }} className={styles.form}>
        <h2>Datos Personales </h2>
        <div className={styles.questionsOne}>
          <div>
            {currentUser && (
              <input
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Nombre ✍🏻 ..."
                className={styles.input}
              />
            )}
            {formik.touched.name && formik.errors.name && (
              <div className={styles.name}>{formik.errors.name}</div>
            )}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Apellidos ...✍🏻"
              className={styles.input}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className={styles.error}>{formik.errors.lastName}</div>
            )}
          </div>
        </div>

        <div className={styles.questionsOne}>
          <div>
            <input
              type="date"
              name="dateOfBirth"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={styles.input}
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
              <div className={styles.error}>{formik.errors.dateOfBirth}</div>
            )}
          </div>

          {/* <div>
            <input
              type="number"
              name="ageUser"
              value={formik.values.ageUser}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Edad...✍🏻"
              className={styles.input}
            />
            {formik.touched.ageUser && formik.errors.ageUser && (
              <div className={styles.error}>{formik.errors.ageUser}</div>
            )}
          </div> */}
        </div>

        <div className={styles.questionsOne}>
          <div>
            <input
              type="text"
              name="dniUser"
              value={formik.values.dniUser}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="DNI...✍🏻"
              className={styles.input}
            />
            {formik.touched.dniUser && formik.errors.dniUser && (
              <div className={styles.error}>{formik.errors.dniUser}</div>
            )}
          </div>

          <div>
            <input
              type="text"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Número telefónico 📱"
              className={styles.input}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className={styles.error}>{formik.errors.phoneNumber}</div>
            )}
          </div>
        </div>

        <div className={styles.questionsOne}>
          <div>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Correo Electrónico...✍🏻"
              className={styles.input}
            />
            {formik.touched.email && formik.errors.email && (
              <div className={styles.error}>{formik.errors.email}</div>
            )}
          </div>


          <div className={styles.inputContainer}>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Contraseña...✍🏻"
              className={styles.input}
            />
            <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {formik.touched.password && formik.errors.password && (
          <div className={styles.error}>{formik.errors.password}</div>
        )}

        <button type="submit" className={styles.btnSubmit}>
          Enviar
        </button>
        {error && <div className={styles.error}>{error}</div>}
      </form>

  );
}

export default MyDataForm;
