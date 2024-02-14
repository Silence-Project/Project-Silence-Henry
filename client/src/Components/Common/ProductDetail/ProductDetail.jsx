import React from "react";
// import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";

import { getById, getCategories } from "../../../Redux/Store/Slices/ProductSlice";
import { sincronizarDB, createCarrito, getCarrito, saveProductDb } from "../../../Redux/Store/Slices/CarritoSlice";

// import CarritoSlice from "../../../Redux/Store/Slices/CarritoSlice";
import styles from "./ProductDetail.module.css";
import Head from "../Header/Head";

export default function Details(props) {
  const dispatch = useDispatch();

  const { id } = useParams();

  const productsDetails = useSelector((state) => state.product.productsDetails);
  const productos = useSelector(state => state.carrito.productos);
  const categories = useSelector((state) => state.product.categories);
  const currentUser = useSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(getById(id));
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getById(id));
    dispatch(getCategories());
    
  }, [dispatch, id]);

  const IdUserConsu = ()=>{
    return currentUser.id
  }

  const handleAddProduct = async(product) => {    

    const idUser = IdUserConsu()

    let arrayIdProduct = id.split("")

    const carritoa = await dispatch(getCarrito(idUser))
    const carritob = carritoa.payload ? carritoa.payload : null

    const productosDb = carritob
    
    if(product){
      try {
        if(carritob.length === 0){
          console.log('Creando carrito para el usuario en la base de datos.');
          const carritoCreado = await dispatch(createCarrito(idUser))
          console.log(carritoCreado.payload);
          dispatch(sincronizarDB({productos, productosDb}))
        }
        else{
          //console.log('Carrito ya existente en la base de datos.');
          const props = {idCarrito: carritob, arrayIdProduct: arrayIdProduct, quantity: 1, name: product[0].name}
          const saveP = await dispatch(saveProductDb(props))
          dispatch(sincronizarDB({productos, productosDb}))
          console.log('Respuesta del saveProductDb: ');
          console.log(saveP.payload)          
        }
      } 
      catch (error) {
        console.log('Error al crear carrito:', error)
      }
      
    }    
  }

  return (
    <div>
      {" "}
      <Head />
      <div className={styles.general}>
        <Link to={ROUTES.HOME}>
          <div className={styles.closeButton}>
            <FaTimes />
          </div>
        </Link>
        {productsDetails.map((product, index) => (
          <div key={index}>
            <img
              className={styles["image-principal"]}
              src={product.image}
              alt="Product"
              width="400px"
              height="250px"
            />
            <div className={styles.h4}>
              <h2>{product.name}</h2>

              <h4>📜 Description:</h4>
              <p className={styles.description}>
                {" "}
                Descripcion: {product.description}
              </p>
              <h4>
                🏷️ Categoría :{" "}
                {
                  categories.find(
                    (category) => category.id === product.idCategory
                  )?.name
                }
              </h4>
              <h4>📦 Stock disponible: {product.stock}</h4>
              <h4>🎨 Color: {product.color}</h4>
              <h4>🧱 Peso: {product.weight}</h4>
              <h4>👘 Caracteristicas de la tela: {product.material}</h4>
              <h4>💸 Precio: {product.price}</h4>
            </div>
          </div>
        ))}

        <button
          className={styles.botondetail}
          onClick={() => handleAddProduct(productsDetails)}
        >
          Añadir al carrito de compras
        </button>

      <Link to="/carrito">
        <button className={styles.botondetail}>Ir al carrito</button>
      </Link>

      <Link to={ROUTES.HOME}>
        <button className={styles.botondetail}>Go Home</button>
      </Link>
    </div>
  </div>

  );
}
