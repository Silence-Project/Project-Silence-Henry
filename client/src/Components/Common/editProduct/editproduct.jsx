import React, { useEffect } from 'react'

import { useFormik, Formik, Form, Field, ErrorMessage, } from "formik";

import { useDispatch, useSelector } from 'react-redux';
import { getById, getCategories, getProducts } from '../../../Redux/Store/Slices/ProductSlice';

import { updateProduct } from '../../../Redux/Store/Slices/ProductSlice';

import { editProduct } from '../../../Redux/Store/Slices/ProductSlice';

import { useState } from 'react';

import CreateCategoryModal from "../../../Auth/CreateProduct/CreateCategoryModal";


const Editproduct = ({props, actualizarDetail} ) => {

    const [uploadedFileUrl, setUploadedFileUrl] = useState("");

    const [uploadedFileName, setUploadedFileName] = useState(""); 
    const [fileError, setFileError] = useState("");
    const [showModal, setShowModal] = useState(false);
  



    const upLoadImage = async (e) => {
        const file = e.target.files[0];
        if (file) {
          const allowedTypes = [
            "image/jpeg",
            "image/png",
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


    const cleanProps = props

    console.log("ACA ESTAN LAS PROPS CLEANS" , cleanProps[0].name)


    const dispatch = useDispatch();
    
    const ProductID = useSelector((state) => state.product.productsDetails);

    const editarlo = (event) => {
        actualizarDetail(event.target.value);
        
      };



    const formik = useFormik({
        initialValues: {
            name: ProductID[0].name,
            description: ProductID[0].description,
            price: ProductID[0].price,
            idCategory: ProductID[0].idCategory,
            code: ProductID[0].code,
            stock: ProductID[0].stock,
            size: ProductID[0].size,
            color: ProductID[0].color,
            material: ProductID[0].material,
            weight: ProductID[0].weight,
            image: ProductID[0].image,
            cost: ProductID[0].cost,
            preference: ProductID[0].preference,


        },

        onSubmit: (values) => {
            dispatch(updateProduct({id: ProductID[0].id, ...values}))
            window.location.reload()
            
        }
    })

    useEffect(() => {
        dispatch(getById(ProductID[0].id))
    }, [dispatch, ProductID[0].id])

    if(!ProductID) {
        return <div>Cargando...</div>
    }






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

    

    useEffect(() => {
      dispatch(getCategories());
    }, []);
  
    const categories = useSelector((state) => state.product.categories);

    const handleChangeCategory = (e) => {
      const { name, value } = e.target;
      console.log("ACA ESTA EL NAME Y EL VALUE DEL CHANGECATEGORY" ,name, value);
      formik.values[name] = value;
    };
    



    

  return (
    <div>



    {ProductID && (
        <form onSubmit={formik.handleSubmit} onChange={editarlo}>
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <br></br>
                <label htmlFor="description">Descripción</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
              <br></br>
                <label htmlFor="price">Precio</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
              <br></br>
                <label htmlFor="code">Código</label>
                <input
                    id="code"
                    name="code"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.code}
                />
              <br></br>
                <label htmlFor="stock">Stock</label>
                <input
                    id="stock"
                    name="stock"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.stock}
                />
              <br></br>
                <label htmlFor="size">Talla</label>
                <input
                    id="size"
                    name="size"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.size}
                />
              <br></br>
                <label htmlFor="color">Color</label>
                <input
                    id="color"
                    name="color"
                    type="color"
                    onChange={formik.handleChange}
                    value={formik.values.color}
                />
              <br></br>
                <label htmlFor="material">Material</label>
                <input
                    id="material"
                    name="material"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.material}
                />
              <br></br>
                <label htmlFor="weight">Peso</label>
                <input
                    id="weight"
                    name="weight"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.weight}
                />
              <br></br>
                <label htmlFor="image">Imagen del producto:</label>
                <input
                    type="file"
                    name="image"
                    onChange={upLoadImage}
                    onBlur={formik.handleBlur}
                    accept="image/jpeg, image/png, image/gif, video/mp4"
                />
              <br></br>
                <label htmlFor="cost">Costo</label>
                <input
                    id="cost"
                    name="cost"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.cost}
                />
              <br></br>
                <label htmlFor="preference">Preferencia</label>
                <input
                    id="preference"
                    name="preference"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.preference}
                />
              <br></br>

                   <div>
          <div>
            <label>Categorias:</label>
            <select
                name="idCategory"
                value={formik.values.idCategory}
                onChange={formik.handleChange}
              >
                {/* Opciones de categorías */}
                {categories.map((idCategory) => (
                  <option key={idCategory.id} value={idCategory.id}>
                    {idCategory.name}
                  </option>
                ))}
            </select>


           </div>
          </div>  




            
            </div>
            <button type="submit">Editar producto</button>
        </form>
    )}
            

    </div>
  )
}

export default Editproduct

