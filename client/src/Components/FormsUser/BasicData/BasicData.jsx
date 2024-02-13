import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../Redux/Store/Slices/UserSlice";

const validationMyUser = Yup.object({
  dniUser: Yup.string(),
  phoneNumber: Yup.string(),
  dateOfBirth: Yup.date(),
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
    setSubmitting(false);
  };

  return (
    <div>
      <h3>Actulizar mi info. básica</h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dniUser: "",
        }}
        validationSchema={validationMyUser}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">Nombre</label>
            <Field id="firstName" name="firstName" placeholder="Nombre" />

            <label htmlFor="lastName">Apellido</label>
            <Field id="lastName" name="lastName" placeholder="Apellido" />

            <label htmlFor="dniUser">DNI</label>
            <Field id="dniUser" name="dniUser" placeholder="DNI" />

            <button type="submit" disabled={isSubmitting}>Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicData;
