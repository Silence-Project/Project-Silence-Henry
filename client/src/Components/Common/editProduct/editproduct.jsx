import React, { useEffect } from 'react'

import { useFormik, Formik, Form, Field, ErrorMessage, } from "formik";

import { useDispatch, useSelector } from 'react-redux';
import { getById, getCategories, getProducts } from '../../../Redux/Store/Slices/ProductSlice';

import { updateProduct } from '../../../Redux/Store/Slices/ProductSlice';

import { editProduct } from '../../../Redux/Store/Slices/ProductSlice';


const Editproduct = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const categories = useSelector((state) => state.product.categories);
    const ProductID = useSelector((state) => state.product.productsDetails);


    console.log("QUE TIENE PRODUCT ID ->" , ProductID)

    console.log("QUE TIENE EL ID  DE PRODUCT ->" , ProductID[0].id)

    const formik = useFormik({
        initialValues: {
            name: ProductID[0].name,
            description: ProductID[0].description,
            price: ProductID[0].price,
            // category: idCategory[0],
            code: ProductID[0].code,
            stock: ProductID[0].stock,
            size: ProductID[0].size,
            color: ProductID[0].color,
            material: ProductID[0].material,
            weight: ProductID[0].weight,
            image: ProductID[0].image,
            cost: ProductID[0].cost,
            price: ProductID[0].price,
            preference: ProductID[0].preference,


        },

        onSubmit: (values) => {
            dispatch(updateProduct({id: ProductID[0].id, ...values}))
        }
    })

    useEffect(() => {
        dispatch(getById(ProductID[0].id))
    }, [dispatch, ProductID[0].id])

    if(!ProductID) {
        return <div>Cargando...</div>
    }

  return (
    <div>



    {ProductID && (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

            
            </div>
            <button type="submit">Editar producto</button>
        </form>
    )}
            

    </div>
  )
}

export default Editproduct