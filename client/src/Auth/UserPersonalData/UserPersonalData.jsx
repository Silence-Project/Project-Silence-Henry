import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Redux/Store/Slices/UserSlice";
import styles from "./UserPersonalData.module.css";

function UserPersonalData () {
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      fullName: "",
      allowPrivacy: "",
      ageUser: "",
      dniUser: "",
      phoneNumber: "",
      dateOfBirth: "",
      password: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
    },

    validationSchema: Yup.object({
      ageUser: Yup.number()
        .required("La edad es requerida")
        .positive("La edad debe ser un número positivo"),
      dniUser: Yup.string().required("El DNI es requerido"),
      phoneNumber: Yup.string().required("El número de teléfono es requerido"),
      dateOfBirth: Yup.date().required("La fecha de nacimiento es requerida"),
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
      address: Yup.string().required("La dirección es requerida"),
      city: Yup.string().required("La ciudad es requerida"),
      postalCode: Yup.string().required("El código postal es requerido"),
      allowPrivacy: Yup.boolean().oneOf(
        [true],
        "Debes aceptar las condiciones y la política de privacidad"
      ),
    }),

    onSubmit: async (values) => {
      try {
        await dispatch(updateUser(values)); 
      } catch (error) {
        setError("Error al enviar los datos: " + error.message);
        console.error("Error al enviar los datos:", error);
      }
    },
  });

  return (
    <div
      className={`${styles.formContainer} ${styles.userPersonalDataContainer}`}
    >
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h2>Datos Personales</h2>
        <div className={styles.questionsOne} > 
        <div>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Nombres ...✍🏻"
            className={styles.input}
          />
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

        <div className={styles.questionsOne} > 
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
        
        <div>
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
        </div>
        </div>


        <div className={styles.questionsOne} > 
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
    
        <div className={styles.questionsOne} >
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

        <div>
          <input
            type="text"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Dirección...✍🏻"
            className={styles.input}
          />
          {formik.touched.address && formik.errors.address && (
            <div className={styles.error}>{formik.errors.address}</div>
          )}
        </div>
        </div>
          

        <div className={styles.questionsOne} >
        <div>
          <input
            type="text"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ciudad ...✍🏻"
            className={styles.input}
          />
          {formik.touched.city && formik.errors.city && (
            <div className={styles.error}>{formik.errors.city}</div>
          )}
        </div>
        <div>
          <input
            type="text"
            name="postalCode"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Código Postal...✍🏻"
            className={styles.input}
          />
          {formik.touched.postalCode && formik.errors.postalCode && (
            <div className={styles.error}>{formik.errors.postalCode}</div>
          )}
        </div>
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Contraseña...✍🏻"
            className={styles.input}
          />
          {formik.touched.password && formik.errors.password && (
            <div className={styles.error}>{formik.errors.password}</div>
          )}
        </div>
  
        <input
          type="checkbox"
          name="allowPrivacy"
          checked={formik.values.allowPrivacy}
          onChange={(e) => formik.setFieldValue('allowPrivacy', e.target.checked)}
          onBlur={formik.handleBlur}
          className={styles.checkbox}
        />
        <label htmlFor="allowPrivacy" className={styles.checkboxLabel}>
          He leído y acepto las condiciones y la política de privacidad
        </label>
        {formik.touched.allowPrivacy && formik.errors.allowPrivacy ? (
          <div className={styles.error}>{formik.errors.allowPrivacy}</div>
        ) : null}

        <button type="submit" className={styles.btnSubmit}>
          Enviar
        </button>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
}

export default UserPersonalData;
