import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {ROUTES} from "../../../Helpers/Routes.helper";
import {
  getById,
  getCategories,
} from "../../../Redux/Store/Slices/ProductSlice";
import { anadirProducto } from "../../../Redux/Store/Slices/CarritoSlice";
import { useAuth0 } from "@auth0/auth0-react";
import requiereUserBd from "../../../Helpers/requireUserBd";
import styles from "./ProductDetail.module.css";
import Head from "../Header/Head";

export default function Details(props) {
  const { user = { email: "null@null.null" } } = useAuth0();
  const dispatch = useDispatch();

  const { id } = useParams();

  const productsDetails = useSelector((state) => state.product.productsDetails);

  const categories = useSelector((state) => state.product.categories);

  useEffect(() => {
    dispatch(getById(id));
    dispatch(getCategories());
  }, [dispatch]);

  const handleAddProduct = (product) => {
    dispatch(anadirProducto(product[0]));
  };

  async function traerDataUser() {
    const isRegisterededUser = await requiereUserBd(user.email);
  }
  traerDataUser();

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
              <h4> Color: {product.size}</h4>
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
      </div>
    </div>

    //     <div className="general">

    //       <div key={productsDetails.id}>
    // {/*
    //         <h1 className="nombre">{productsDetails.name}</h1> */}

    //         <img className="image-principal"
    //           src={'https://i.pinimg.com/236x/0e/4f/ce/0e4fce603341659d87362c2666530f3d.jpg'}
    //           alt="hola"
    //           width="400px"
    //           height="250px"
    //         />

    //         {/* <img className="image-secundaria"
    //           src={productsDetails.image.map((image, index) => <p key={index} className="card-image">{image}</p>)}
    //           alt={productsDetails.name} /> */}

    //         <div  className="h4">

    //             <h4 >📜 Description:</h4>

    //             <p className="description"> Descripcion: {productsDetails.descripcion} </p>

    //             <h4>SKU : a {productsDetails.codigo}</h4>

    //             <h4>🏷️ Categoría: {productsDetails.categoria}</h4>

    //             <h4>📦 Stock disponible: {productsDetails.stock}</h4>

    //             <h4>🎨 Color: {productsDetails.color}</h4>

    //             <h4>🧱 Peso: {productsDetails.peso}</h4>

    //             {/* <h4>📏 Tallas disponibles: <br/>
    //             {productsDetails.tallas?.map((talla, i) => (
    //               <li key={i}>{talla.name}</li>
    //             ))}</h4> */}

    //             <h4>👘 Caracteristicas de la tela: {productsDetails.caracteristicasTela}</h4>

    //             <h4>💸 Precio: {productsDetails.price}</h4>

    //          {/* Características de los productos:
    //           puesto de Relevancia en la visualización, rating, comparación con los otros talles,
    //            características de la tela.  */}

    //            {/* <h4>🌟 Rating: {COMPONENTE.rating} </h4> */}
    //             {/* <h4>🌟 Carrito: {COMPONENTE.carrito} </h4> */}

    //             <div>HOLA</div>

    //         </div>

    //       </div>

    //         <Link to={ROUTES.HOME}>
    //           <button className="botondetail">Go Home</button>
    //         </Link>

    //     </div>
  );
}
