import React, { useState, useEffect }  from "react";
import { useFormik } from "formik";
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen';
import * as Yup from "yup";
import { Link , useNavigate } from "react-router-dom";
import ROUTES from "../../Helpers/Routes.helper";
import { useDispatch, useSelector } from "react-redux";
import { postProduct , getCategories } from "../../Redux/Store/Slices/ProductSlice";
import styles from "./CreateProduct.module.css";




function CreateProduct() {

  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

const upLoadImage = async (e) => {
  const files = e.target.file;
  
}

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      description: "",
      cost: "",
      price: "",
      code: "",
      stock: "",
      idCategory: "",
      color: "#000000",
      weight: "",
      size: "",
      material: "",
      preference: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El campo 'nombre' es requerido"),
      image: Yup.string().required("El campo 'imagen' es requerido"),
      description: Yup.string().required("Añada una description al producto"),
      cost: Yup.number().positive().integer().required("El campo 'precio base' es requerido"),
      price: Yup.number().positive().integer().required("El campo 'precio venta' es requerido"),
      code: Yup.string().required("El campo 'codigo SKU' es requerido"),
      stock: Yup.string().required("El campo 'stock' es requerido"),
      idCategory: Yup.string().required("Seleccione una categoria"),
      color: Yup.string().required("El campo 'color' es requerido"),
      weight: Yup.string().required("El campo 'weight' es requerido"),
      size: Yup.string().required("El campo 'size' es requerido"),
      material: Yup.string().required("El campo 'material' es requerido"),
      preference: Yup.string().required("El campo 'preference' es requerido"),
    }),
  
  });


  
  useEffect(() => {
    dispatch(getCategories());

 } ,[]);




 
  const categories = useSelector((state) => state.product.categories);


  const handleSubmit = (event) => {
    event.preventDefault();
    
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        dispatch(postProduct(formik.values));
        navigate(ROUTES.HOME);
        window.location.reload();
      } else {
        alert("Faltan campos por completar o hay codes repetidos");
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
    <p>Imagen del producto:</p>
        <input
          type="file"
          name="file"
          value={formik.values.image}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
        />

        {formik.touched.image && formik.errors.image ? (
          <div className={styles.error}>{formik.errors.image}</div>
        ) : null}
    </div>
    

    <div className={styles.divForm}>
    <p>description:</p>
        <input
          type="text"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="📧 description..."
          className={styles.input}
        />

        {formik.touched.description && formik.errors.description ? (
          <div className={styles.error}>{formik.errors.description}</div>
        ) : null}
    </div>

    <div className={styles.divForm}>
    <p>Precio Base:</p>
        <input
          type="number"
          name="cost"
          value={formik.values.cost}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="💸precio base..."
          className={styles.input}
        />
        {formik.touched.cost && formik.errors.cost ? (
          <div className={styles.error}>{formik.errors.cost}</div>
        ) : null}
    </div>

    <div className={styles.divForm}>
    <p>Precio Venta:</p>
        <input
          type="number"
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="💸precio venta..."
          className={styles.input}
        />
        {formik.touched.price && formik.errors.price ? (
          <div className={styles.error}>{formik.errors.price}</div>
        ) : null}
    </div>



    <div className={styles.divForm}>
    <p>SKU O codigo:</p>
        <input
        
          type="text"
          name="code"
          value={formik.values.code}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="📝codigo o SKU ..."
          className={styles.input}
        />
        {formik.touched.code && formik.errors.code ? (
          <div className={styles.error}>{formik.errors.code}</div>
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
          <label htmlFor="idCategory">Categorias:</label>
          <select
            name="idCategory"
            value={formik.values.idCategory}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.input}
          >
              <option value="">Seleccionar Categoria</option>
              {categories.map((idCategory) => (
                <option key={idCategory.id} value={idCategory.id}>
                  {idCategory.name}
                </option>
              ))}
          </select>

          {/* {formik.touched.idCategory && formik.errors.idCategory ? (
            <div className={styles.error}>{formik.errors.idCategory}</div>

          ) : null} */}
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
    <p>weight:</p>
        <input
          type="text"
          name="weight"
          value={formik.values.weight}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="🏋️‍♂️ weight..."
          className={styles.input}
        />
        {formik.touched.weight && formik.errors.weight ? (
          <div className={styles.error}>{formik.errors.weight}</div>
        ) : null}

    </div>

    <div className={styles.divForm}>
    <p>size:</p>
      
        <input
          type="text"
          name="size"
          value={formik.values.size}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="📏size..."
          className={styles.input}
        />
        {formik.touched.size && formik.errors.size ? (
          <div className={styles.error}>{formik.errors.size}</div>
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
    <p>preference:</p>
        <select
          type="text"
          name="preference"
          value={formik.values.preference}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="🌟preference..."
          className={styles.input}
        > 

          <option value="">Seleccionar preference</option>
          <option value="1">1 - Prioridad maxima</option>
          <option value="2">2 </option>
          <option value="3">3 </option>
          <option value="4">4 </option>
          <option value="5">5 - Prioridad minima</option>

        </select>

        {formik.touched.preference && formik.errors.preference ? (
          <div className={styles.error}>{formik.errors.preference}</div>
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