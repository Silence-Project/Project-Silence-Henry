import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateUser, gettingUser } from "../../../Redux/Store/Slices/UserSlice";
import style from "./BasicData.module.css";

const validationMyUser = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Nombre debe tener al menos tres caracteres.")
    .max(30, "Nombre no puede tener más de 30 caracteres."),
  lastName: Yup.string()
  .min(2, "Apellido debe tener al menos tres caracteres.")
  .max(30, "Apellido no puede tener más de 30 caracteres."),
  dniUser: Yup.string()
    .min(5, "Ingresa un DNI válido.")
    .max(25, "Ingresa un DNI válido."),
  phoneNumber: Yup.string()
    .matches(
      /^[0-9]{5,15}$/,
      "Ingresa un número telefónico válido."
    ),
  birthday: Yup.date(),
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/,
      "Password must contain at least one letter and one number"
    )
    .min(3, "Password must be at least 3 characters")
    .max(30, "Password cannot be more than 30 characters"),
});

const BasicData = ({ currentUser }) => {
  const dispatch = useDispatch();
  const { id } = currentUser;

  const onSubmit = async (values, { setSubmitting }) => {
    console.log("onSubmit -> values", values);
    await dispatch(updateUser({ id, values }));
    dispatch(gettingUser(id)); //para actualizar datos
    setSubmitting(false);
  };

  return (
    <div>
      <h3>Actualizar  datos</h3>
      <Formik
        initialValues={{
          firstName: currentUser.firstName || "",
          lastName: currentUser.lastName || "",
          dniUser: currentUser.dniUser || "",
          phoneNumber: currentUser.phoneNumber || "",
          birthday: currentUser.birthday || "",
          gender: currentUser.gender || "",
        }}
        validationSchema={validationMyUser}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={style.formContainer}>
            <label htmlFor="firstName">Nombre</label>
            <Field className={style.inputContainer} id="firstName" type="text" name="firstName" placeholder="Nombre" />
            <ErrorMessage name="firstName" className={style.error} />

            <label htmlFor="lastName">Apellido</label>
            <Field id="lastName" type="text" name="lastName" placeholder="Apellido" />
            <ErrorMessage name="lastName" className={style.error} />

            <label htmlFor="dniUser">DNI</label>
            <Field id="dniUser" name="dniUser" placeholder="DNI" />
            <ErrorMessage name='dniUser' />

            <label htmlFor="phoneNumber">Número telefónico</label>
            <Field id="phoneNumber" type="text" name="phoneNumber" placeholder="Número telefónico" />
            <ErrorMessage name="phoneNumber" />

            <label htmlFor="birthday">Fecha de nacimiento</label>
            <Field id="birthday" type="date" name="birthday" placeholder="Fecha de nacimiento" />
            <ErrorMessage name='birthday' className={style.error} />

            <label htmlFor="gender">Género</label>
            <Field as="select" name="gender" id="gender">
              <option value="mujer">Mujer</option>
              <option value="hombre">Hombre</option>
              <option value="otro">Otro</option>
            </Field>

            <button type="submit" className={style.btnSubmit} disabled={isSubmitting}>Actualizar datos</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicData;
