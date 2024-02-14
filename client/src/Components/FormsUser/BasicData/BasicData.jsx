import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateUser, gettingUser } from "../../../Redux/Store/Slices/UserSlice";

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
    dispatch(gettingUser(id)); //para actualizar datos
    setSubmitting(false);
  };

  return (
    <div>
      <h3>Actulizar mi info. básica</h3>
      <Formik
        initialValues={{
          firstName: currentUser.firstName || "",
          lastName: currentUser.lastName || "",
          dniUser: currentUser.dniUser || "",
          phoneNumber: currentUser.phoneNumber || "",
          gender: currentUser.gender || "",
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

            <label htmlFor="phoneNumber">Número telefónico</label>
            <Field id="phoneNumber" name="phoneNumber" placeholder="Número telefónico" />

            <label htmlFor="dniUser">DNI</label>
            <Field id="dniUser" name="dniUser" placeholder="DNI" />

            <label htmlFor="gender">Género</label>
            <Field as="select" name="gender" id="gender">
             <option value="mujer">Mujer</option>
             <option value="hombre">Hombre</option>
             <option value="otro">Otro</option>
           </Field>

            <button type="submit" disabled={isSubmitting}>Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicData;
