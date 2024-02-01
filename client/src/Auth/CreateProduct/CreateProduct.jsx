import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// import styles from "../Login/SingUp.module.css";

import styles from "./CreateProduct.module.css";
import { Link , useNavigate } from "react-router-dom";
import ROUTES from "../../Helpers/Routes.helper";
import { useDispatch } from "react-redux";
import { postProduct } from "../../Redux/Store/Slices/ProductSlice";


function CreateProduct() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      descripcion: "",
      precio_base: "",
      precio_venta: "",
      codigo: "",
      stock: "",
      categoria: "",
      color: "",
      peso: "",
      talla: "",
      material: "",

    },
    validationSchema: Yup.object({
      name: Yup.string().required("El campo 'nombre' es requerido"),
      image: Yup.string().required("El campo 'imagen' es requerido"),
      descripcion: Yup.string().required("Añada una descripcion al producto"),
      precio_base: Yup.number().positive().integer().required("El campo 'precio base' es requerido"),
      precio_venta: Yup.number().positive().integer().required("El campo 'precio venta' es requerido"),
      codigo: Yup.string().required("El campo 'Codigo' es requerido"),
      stock: Yup.string().required("El campo 'stock' es requerido"),
      categoria: Yup.string().required("El campo 'categoria' es requerido"),
      color: Yup.string().required("El campo 'color' es requerido"),
      peso: Yup.string().required("El campo 'peso' es requerido"),
      talla: Yup.string().required("El campo 'talla' es requerido"),
      material: Yup.string().required("El campo 'material' es requerido"),
      preferencia: Yup.string().required("El campo 'preferencia' es requerido"),
    }),
  
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        dispatch(postProduct(formik.values));
        navigate(ROUTES.HOME);
      } else {
        alert("Faltan campos por completar o hay codigos repetidos");
      }
    } )

}



  return (
    <div className="{`${styles.formContainer} ${styles.signUpContainer}`}">
    

      <form onSubmit={handleSubmit} className={styles.form} >
        <h1>Crear Producto</h1>

        
    <div className={styles.divForm}>
          <p>Nombre:</p>
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

    </div>
   

    <div className={styles.divForm}>
    <p>Imagen URL:</p>
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
    </div>
    

    <div className={styles.divForm}>
    <p>Descripcion:</p>
        <input
          type="text"
          name="descripcion"
          value={formik.values.descripcion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="📧 descripcion..."
          className={styles.input}
        />

        {formik.touched.descripcion && formik.errors.descripcion ? (
          <div className={styles.error}>{formik.errors.descripcion}</div>
        ) : null}
    </div>

    <div className={styles.divForm}>
    <p>Precio Base:</p>
        <input
          type="number"
          name="precio_base"
          value={formik.values.precio_base}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="💸precio base..."
          className={styles.input}
        />
        {formik.touched.precio_base && formik.errors.precio_base ? (
          <div className={styles.error}>{formik.errors.precio_base}</div>
        ) : null}
    </div>

    <div className={styles.divForm}>
    <p>Precio Venta:</p>
        <input
          type="number"
          name="precio_venta"
          value={formik.values.precio_venta}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="💸precio venta..."
          className={styles.input}
        />
        {formik.touched.precio_venta && formik.errors.precio_venta ? (
          <div className={styles.error}>{formik.errors.precio_venta}</div>
        ) : null}
    </div>



    <div className={styles.divForm}>
    <p>SKU O CODIGO:</p>
        <input
        
          type="text"
          name="codigo"
          value={formik.values.codigo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="📝Codigo ..."
          className={styles.input}
        />
        {formik.touched.codigo && formik.errors.codigo ? (
          <div className={styles.error}>{formik.errors.codigo}</div>
        ) : null}
    </div>

    <div className={styles.divForm}>
    <p>Stock disponible:</p>
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
    </div>

    <div className={styles.divForm}>
    <p>Categoria:</p>
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
    </div>
    

    <div className={styles.divForm}>
    <p>Color:</p>
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
    </div>
      
    <div className={styles.divForm}>
    <p>Peso:</p>
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

    </div>

    <div className={styles.divForm}>
    <p>Talla:</p>
      
        <input
          type="text"
          name="talla"
          value={formik.values.talla}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="📏talla..."
          className={styles.input}
        />
        {formik.touched.talla && formik.errors.talla ? (
          <div className={styles.error}>{formik.errors.talla}</div>
        ) : null}

    </div>

    <div className={styles.divForm}>
          
    <p>Material de la tela:</p>
        <input
          type="text"
          name="material"
          value={formik.values.material}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="🎨material..."
          className={styles.input}
        />
        {formik.touched.material && formik.errors.material ? (
          <div className={styles.error}>{formik.errors.material}</div>
        ) : null}
    </div>

    <div className={styles.divForm}>
    <p>Preferencia:</p>
        <input
          type="text"
          name="preferencia"
          value={formik.values.preferencia}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="🌟preferencia..."
          className={styles.input}
        />
        {formik.touched.preferencia && formik.errors.preferencia ? (
          <div className={styles.error}>{formik.errors.preferencia}</div>
        ) : null}
    </div>    

    <button type="submit"  className={styles.btnSubmit}>
          Crear Producto
        </button>
      </form>

      <Link to={ROUTES.HOME} className={styles.btnSubmit}>Volver al home</Link>

        
      
    </div>

    
  );
}

export default CreateProduct;