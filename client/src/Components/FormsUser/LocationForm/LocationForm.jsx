import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { useDispatch } from "react-redux";
import URLTOCHANGE from '../../../Helpers/routesToChange';
import { gettingUser } from '../../../Redux/Store/Slices/UserSlice';
// import { updateUser } from "../../../Redux/Store/Slices/UserSlice";

const validationMyForm = Yup.object({
  country: Yup.string(),
  city: Yup.string(),
  address: Yup.string(),
});

const LocationForm = ({ currentUser }) => {
  const dispatch = useDispatch();
  const { id } = currentUser;

  const onSubmit = async (values, { setSubmitting }) => {
    console.log("onSubmit -> values", values);
    // await dispatch(updateUser({ id, values }));

    const response = await axios.post(`${URLTOCHANGE.theUrl}/locations`, values)

    console.log('que fue la response? ', response);
    dispatch(gettingUser(currentUser.id)); //para actualizar datos

    setSubmitting(false);
  };

  return (
    <div>
      <h3>Agregar nueva ubicación</h3>
      <Formik
        initialValues={{
          country: "",
          city: "",
          address: "",
          postalCode: "",
          idUser: currentUser.id,
        }}
        validationSchema={validationMyForm}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="country">Pais</label>
            <Field id="country" name="country" placeholder="Pais" />

            <label htmlFor="city">Ciudad</label>
            <Field id="city" name="city" placeholder="Ciudad" />

            <label htmlFor="address">Dirección</label>
            <Field id="address" name="address" placeholder="Dirección" />

            <label htmlFor="postalCode">Código Postal</label>
            <Field id="postalCode" name="postalCode" placeholder="Código postal" />

            <button type="submit" disabled={isSubmitting}>Crear ubicación</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LocationForm;
