import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { anadirProducto } from "../../../Redux/Store/Slices/CarritoSlice";
import style from "./ProductCard.module.css";
import Details from "../ProductDetail/ProductDetail";

const ProductCard = ({ product }) => {
  const { id, name, image, price, description, color } = product;
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = (product) => {
    dispatch(anadirProducto(product));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={style.absolute}>
      <div className={style.productDetail}>
        <Link to={`/detail/${id}`}>
          <div className={style.productImageContainer} onClick={toggleModal}>
            <img className={style.productImage} src={image} alt={description} />
          </div>
          <div className={style.info}>
            <h2 className={style.productName}>{name}</h2>
            <button
              className={style.button}
              onClick={() => handleAddProduct(product)}
            >
              Añadir al carrito
            </button>
            <div className={style.productPrice}>💸 {price}</div>
            <div className={style.productPrice}>💸 {color}</div>
          </div>
        </Link>
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
            <p>{color}</p>
            <p>💸 {price}</p>
            <button onClick={() => handleAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
