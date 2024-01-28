import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// import styles from "../Login/SingUp.module.css";

import styles from "./CreateProduct.module.css";


function CreateProduct() {
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      description: "",
      precio: "",
      SKU: "",
      stock: "",
      categoria: "",
      color: "",
      peso: "",
      tallas: "",

    },
    validationSchema: Yup.object({
      name: Yup.string().required("El campo 'nombre' es requerido"),
      image: Yup.string().required("El campo 'imagen' es requerido"),
      description: Yup.string().required("Añada una descripcion al producto"),
      precio: Yup.string().required("El campo 'precio' es requerido"),
      SKU: Yup.string().required("El campo 'Codigo' es requerido"),
      stock: Yup.string().required("El campo 'stock' es requerido"),
      categoria: Yup.string().required("El campo 'categoria' es requerido"),
      color: Yup.string().required("El campo 'color' es requerido"),
      peso: Yup.string().required("El campo 'peso' es requerido"),
      tallas: Yup.string().required("El campo 'tallas' es requerido"),
    }),
  
  });


  return (
    <div className="{`${styles.formContainer} ${styles.signUpContainer}`}">
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h1>Crear Producto</h1>

        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Nombre..."
          className={styles.input}
        />

          {formik.touched.name && formik.errors.name ? (
            <div className={styles.error}>{formik.errors.name}</div>
          ) : null}


        <input
          type="text"
          name="image"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="🎴Imagen..."
          className={styles.input}
        />

        {formik.touched.image && formik.errors.image ? (
          <div className={styles.error}>{formik.errors.image}</div>
        ) : null}

    
        <input
          type="text"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="📧 descripcion..."
          className={styles.input}
        />

        {formik.touched.description && formik.errors.description ? (
          <div className={styles.error}>{formik.errors.description}</div>
        ) : null}


        <input
          type="precio"
          name="precio"
          value={formik.values.precio}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="💸precio..."
          className={styles.input}
        />
        {formik.touched.precio && formik.errors.precio ? (
          <div className={styles.error}>{formik.errors.precio}</div>
        ) : null}


        <input
          type="text"
          name="SKU"
          value={formik.values.SKU}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="📝Codigo SKU..."
          className={styles.input}
        />
        {formik.touched.SKU && formik.errors.SKU ? (
          <div className={styles.error}>{formik.errors.SKU}</div>
        ) : null}

        <input
          type="text"
          name="stock"
          value={formik.values.stock}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="📦stock..."
          className={styles.input}
        />
        {formik.touched.stock && formik.errors.stock ? (
          <div className={styles.error}>{formik.errors.stock}</div>
        ) : null}

        <input
          type="text"
          name="categoria"
          value={formik.values.categoria}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="🏷️categoria..."
          className={styles.input}
        />
        {formik.touched.categoria && formik.errors.categoria ? (
          <div className={styles.error}>{formik.errors.categoria}</div>
        ) : null}

        
        <input
          type="color"
          name="color"
          value={formik.values.color}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="🎨color..."
          className={styles.input}
        />
        {formik.touched.color && formik.errors.color ? (
          <div className={styles.error}>{formik.errors.color}</div>
        ) : null}


        <input
          type="text"
          name="peso"
          value={formik.values.peso}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="🏋️‍♂️ peso..."
          className={styles.input}
        />
        {formik.touched.peso && formik.errors.peso ? (
          <div className={styles.error}>{formik.errors.peso}</div>
        ) : null}

        <input
          type="text"
          name="tallas"
          value={formik.values.tallas}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="📏tallas..."
          className={styles.input}
        />
        {formik.touched.tallas && formik.errors.tallas ? (
          <div className={styles.error}>{formik.errors.tallas}</div>
        ) : null}

        <button type="submit" className={styles.btnSubmit}>
          Crear Producto
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
