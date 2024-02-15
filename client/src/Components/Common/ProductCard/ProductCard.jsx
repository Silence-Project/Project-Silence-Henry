import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./ProductCard.module.css";

import { useSelector } from "react-redux";
import Details from "../ProductDetail/ProductDetail";

import { addFavorito , deleteFavorito }  from "../../../Redux/Store/Slices/FavSlice";

import { deleteProduct } from "../../../Redux/Store/Slices/ProductSlice";

import emptyHeart from "../favoritos/images/corazon_vacio.png";
import filledHeart from "../favoritos/images/corazon_lleno.png";

import { toggleSuspension } from "../../../Redux/Store/Slices/ProductSlice";

import URLTOCHANGE from "../../../Helpers/routesToChange";

const ProductCard = ({ product }) => {
  const { id, name, image, price, description } = product;
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const favoritos = useSelector((state) => state.fav.favoritos);
  const isFavorito = favoritos.some((favProduct) => favProduct.id === id);
  const currentUser = useSelector((state) => state.user.user)


  const [sw , setSw] = useState(false)

  const handleSw = (aceptar) =>{
    if(aceptar){
      setSw(true)
    } else {
      setSw(false)
    }
  }
  
  const handleDeleteProduct = () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres eliminar este producto?"
    )
    if (confirmDelete) {
      setSw(true)
      dispatch(deleteProduct({ id: product.id, sw: true }));
    } else {
      setSw(false)
    }
    
  }

 const handleToggleFavorito = () => {
   if (isFavorito) {
     dispatch(deleteFavorito(id));
   } else {
     dispatch(addFavorito(product));
   }
 }

  // const handleAddProduct = (product) => {
  //   dispatch(anadirProducto(product));
  // };

  const toggleModal = () => {
    setShowModal(!showModal);
  };


//SUSPENSION
  const [state, setEstado] = useState(product.state.product);

  const handleToggleSuspension = () => {
    const newState = state; // Invierte el valor de state para suspender/reactivar el producto
    fetch(`https://silenceback.onrender.com/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ state: newState }), // Envía el nuevo estado en el cuerpo de la solicitud
    })
    .then((response) => {
      if (response.ok) {
        // La solicitud se completó correctamente, puedes realizar acciones adicionales si es necesario
        setEstado(newState); // Actualiza el estado local del producto en el componente
      } else {
        // Maneja cualquier error en la respuesta de la solicitud
        console.error("Error en la solicitud PATCH:", response.statusText);
      }
    })
    .catch((error) => {
      // Maneja cualquier error de red o del lado del cliente
      console.error("Error en la solicitud PATCH:", error);
    });
  };
  

console.log("CURRENT USER" ,currentUser)

  if(currentUser && currentUser.isAdmin === true){
    return (
      <div className={style.absolute}>
        <div className={style.productDetail}>
  
          <button onClick={handleToggleSuspension} className={style.button}>{state ? "Reactivar" : "Suspender"}</button>
  
          <Link to={`/detail/${id}`}>
            <div className={style.productImageContainer} onClick={toggleModal}>
              <img className={style.productImage} src={image} alt={description} />
           
           
            </div>
  
           
            <div className={style.info}>
      
              <h2 className={style.productName}>{name}</h2>
              
           
              <div className={style.productPrice}>💸 {price}</div>
            </div>
          
            </Link>
  
            <div className={style.info}>
              {/* <button
                  className={style.button}
                  onClick={() => handleAddProduct(product)}
                >
                  Añadir al carrito
              </button> */}
  
                <button className={style.button} onClick={handleToggleFavorito}>
                   <img src={isFavorito ? filledHeart : emptyHeart  } alt="Heart Icon" className={style.heartIcon} />
                </button>
  
              <button onClick={handleDeleteProduct} className={style.button}>Eliminar Producto</button>
  
            </div>
  
          
        </div>
        {showModal && (
          <div className={style.modal}>
            <div className={style.modalContent}>
              <span className={style.close} onClick={toggleModal}>
                &times;
              </span>
              <h2>{name}</h2>
              <img src={image} alt={description} />
              <p>{description}</p>
              <p>💸 {price}</p>
             
            </div>
                    <button onClick={() => handleAddProduct(product)}>
                      Añadir al carrito
                    </button>
  
  
          </div>
        )}
             
      </div>
    );
  } else {
    return (
      <div className={style.absolute}>
        <div className={style.productDetail}>
  
  
          <Link to={`/detail/${id}`}>
            <div className={style.productImageContainer} onClick={toggleModal}>
              <img className={style.productImage} src={image} alt={description} />
           
           
            </div>
  
           
            <div className={style.info}>
      
              <h2 className={style.productName}>{name}</h2>
              
           
              <div className={style.productPrice}>💸 {price}</div>
            </div>
          
            </Link>
  
            <div className={style.info}>
              {/* <button
                  className={style.button}
                  onClick={() => handleAddProduct(product)}
                >
                  Añadir al carrito
              </button> */}
  
                <button className={style.button} onClick={handleToggleFavorito}>
                   <img src={isFavorito ? filledHeart : emptyHeart  } alt="Heart Icon" className={style.heartIcon} />
                </button>
  
  
            </div>
  
          
        </div>
        {showModal && (
          <div className={style.modal}>
            <div className={style.modalContent}>
              <span className={style.close} onClick={toggleModal}>
                &times;
              </span>
              <h2>{name}</h2>
              <img src={image} alt={description} />
              <p>{description}</p>
              <p>💸 {price}</p>
             
            </div>
                    <button onClick={() => handleAddProduct(product)}>
                      Añadir al carrito
                    </button>
  
  
          </div>
        )}
             
      </div>
    );
  }
  
};

export default ProductCard;
