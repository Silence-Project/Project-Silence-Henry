import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useOutletContext } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../Helpers/Routes.helper";
import { useDispatch, useSelector } from "react-redux";
import {
  postProduct,
  getCategories,
} from "../../Redux/Store/Slices/ProductSlice";
import CreateCategoryModal from "./CreateCategoryModal";
import IMGCLOSE from "../../img/icons/x-mark.png";
import styles from "./CreateProduct.module.css";

function CreateProduct({ handleCloseCreateProduct }) {
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [uploadedFileUrl, setUploadedFileUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      color: "#7eb19c",
      weight: "",
      size: "",
      material: "",
      preference: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("El campo 'nombre' es requerido"),
      image: Yup.string().url("Debe ser una URL válida"),
      description: Yup.string().required("Añada una descripción al producto"),
      cost: Yup.number()
        .positive()
        .integer()
        .required("El campo 'precio base' es requerido"),
      price: Yup.number()
        .positive()
        .integer()
        .required("El campo 'precio venta' es requerido"),
      code: Yup.string().required("El campo 'código SKU' es requerido"),
      stock: Yup.string().required("El campo 'stock' es requerido"),
      idCategory: Yup.string().required("Seleccione una categoría"),
      color: Yup.string().required("El campo 'color' es requerido"),
      weight: Yup.string().required("El campo 'peso' es requerido"),
      size: Yup.string().required("El campo 'tamaño' es requerido"),
      material: Yup.string().required("El campo 'material' es requerido"),
      preference: Yup.string().required("El campo 'preferencia' es requerido"),
    }),
  });

// const upLoadImage = async (e) => {
//   const file = e.target.files[0];
//   if (file) {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "silence");

//     try {
//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/ddiwcoip8/image/upload`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Imagen subida a Cloudinary:", data);

//         setUploadedFileUrl(data.secure_url);
//         formik.setFieldValue("image", data.secure_url);
//       } else {
//         console.error("Error al cargar la imagen a Cloudinary");
//         setFileError("Error al cargar la imagen a Cloudinary");
//       }
//     } catch (error) {
//       console.error("Error al cargar la imagen:", error);
//       setFileError("Error al cargar la imagen");
//     }
//   }
// };



  const upLoadImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/HEIC",
        "image/gif",
        "video/mp4",
        "image/heic",
        "image/webp",
      ];

      
      if (allowedTypes.includes(file.type)) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "silence");

        try {
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/ddiwcoip8/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

          if (response.ok) {
            const data = await response.json();
            console.log("Imagen subida a Cloudinary:", data);

            setUploadedFileUrl(data.secure_url);
            formik.setFieldValue("image", data.secure_url);
          } else {
            console.error("Error al cargar la imagen a Cloudinary");
            setFileError("Error al cargar la imagen a Cloudinary");
          }
        } catch (error) {
          console.error("Error al cargar la imagen:", error);
          setFileError("Error al cargar la imagen");
        }
      } else {
        setFileError("Solo se permiten imágenes y videos jpeg, png, gif y mp4");
        e.target.value = null;
      }
    }
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categories = useSelector((state) => state.product.categories);

  const handleSubmit = (event) => {
    event.preventDefault();

    formik.validateForm().then((errors) => {
      console.log("Valores del formulario:", formik.values);
      console.log("aerrs", Object.keys(errors));
      if (Object.keys(errors).length === 0) {
        dispatch(postProduct(formik.values));
        navigate(ROUTES.HOME);
        window.location.reload();
      } else {
        alert("Faltan campos por completar o hay codes repetidos");
      }
    });
  };

  const reloadCategories = () => {
    dispatch(getCategories());
  };

  const showModalCreateCategory = () => {
    setShowModal(true);
  };

  const hideModalCreateCategory = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    if (typeof handleCloseCreateProduct === "function") {
      handleCloseCreateProduct();
    } else {
      console.error(
        "handleCloseCreateProduct is not a function",
        handleCloseCreateProduct
      );
    }
  };

  // const [localUserData] = useOutletContext();

  return (
    <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
      <form onSubmit={handleSubmit}>
        <h2>Crear Producto</h2>
        <div className={styles.btnCloseContainer}>
          <img
            src={IMGCLOSE}
            alt="Close"
            className={styles.btnClose}
            onClick={handleCancel}
            style={{ width: "24px", height: "24px", cursor: "pointer" }}
          />
        </div>
        <div className={styles.groupOne}>
          <div className={styles.divForm}>
            <label>Categorias:</label>
            <select
              name="idCategory"
              value={formik.values.idCategory}
              onChange={(e) => {
                formik.handleChange(e);
                if (e.target.value === "createCategory") {
                  showModalCreateCategory();
                }
              }}
              onBlur={formik.handleBlur}
              className={styles.input}
            >
              <option value="" disabled>
                Seleccionar Categoria
              </option>
              <option value="createCategory">CREAR CATEGORÍA</option>
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
            <label>Preferencias:</label>
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

          <div className={styles.divForm}>
            <label>Nombre:</label>
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
            <label>Imagen del producto:</label>
            <input
              type="file"
              name="image"
              onChange={upLoadImage}
              onBlur={formik.handleBlur}
              className={styles.input}
              accept="image/jpeg, image/png, image/gif, video/mp4, image/webp, image/HEIC, image/gif"
            />
            {fileError && <div className={styles.error}>{fileError}</div>}
            <img
              src={uploadedFileUrl}
              alt={uploadedFileName}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.groupOne}>
          <div className={styles.divForm}>
            <label>Precio Base:</label>
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
            <label>Precio Venta:</label>
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
            <label>SKU O codigo:</label>
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
            <label>Stock disponible:</label>
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
        </div>
        <div className={styles.groupOne}>
          <div className={styles.divForm}>
            <label>Color:</label>
            <input
              type="color"
              name="color"
              value={formik.values.color}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="🎨color..."
              className={styles.inputColor}
            />
            {formik.touched.color && formik.errors.color ? (
              <div className={styles.error}>{formik.errors.color}</div>
            ) : null}
          </div>

          <div className={styles.divForm}>
            <label>weight:</label>
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
            <label>size:</label>

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
            <label>Material de la tela:</label>
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
        </div>
        <div className={styles.groupOne}>
          <div className={styles.divForm}>
            <label>description:</label>
            <textarea
              type="text"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="📧 description..."
              className={styles.textArea}
            />

            {formik.touched.description && formik.errors.description ? (
              <div className={styles.error}>{formik.errors.description}</div>
            ) : null}
          </div>

          <button type="submit" className={styles.btnSubmit}>
            Crear Producto
          </button>
        </div>
      </form>
      {showModal && (
        <CreateCategoryModal
          onClose={hideModalCreateCategory}
          reloadCategories={reloadCategories}
        />
      )}
    </div>
  );
}

export default CreateProduct;
