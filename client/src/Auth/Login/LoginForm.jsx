import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import styles from "./LoginForm.module.css";

const RegisterForm = () => {
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const initialValues = {
    fullName: "",
    lastName: "",
    birthDate: null,
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .matches(/^[A-Za-z]+$/, "El nombre completo no debe contener números")
      .required("El nombre completo es requerido"),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Los apellidos no deben contener números")
      .required("Los apellidos son requeridos"),
    email: Yup.string()
      .email("Correo electrónico no válido")
      .required("El correo electrónico es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
  };

  return (
    <div className={styles.form}>
      <h2>Registro</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="fullName">Nombres:</label>
            <Field type="text" id="fullName" name="fullName" />
            <ErrorMessage
              name="fullName"
              component="div"
              className={styles.error}
            />
          </div>

          <div>
            <label htmlFor="lastName">Apellidos:</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage
              name="lastName"
              component="div"
              className={styles.error}
            />
          </div>

          <div>
            <label htmlFor="birthDate">Fecha de Nacimiento:</label>
            <Field name="birthDate">
              {({ field, form }) => (
                <DatePicker
                  id="birthDate"
                  selected={field.value}
                  onChange={(date) => form.setFieldValue("birthDate", date)}
                  onBlur={() => form.setFieldTouched("birthDate", true)}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  placeholderText="Selecciona fecha"
                   locale={es} 
                />
              )}
            </Field>
            <ErrorMessage
              name="birthDate"
              component="div"
              className={styles.error}
            />
          </div>

          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </div>

          <button type="submit">Registrarse</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
