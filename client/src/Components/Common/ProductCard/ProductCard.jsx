import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { anadirProducto } from "../../../Redux/Store/Slices/CarritoSlice";
import style from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { id, name, image, price, description } = product;
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(anadirProducto(product));
  };

  return (
    <div className={style.absolute}>
      <div className={style.productDetail}>
        <Link to={`/detail/${id}`}>
          <div className={style.productImageContainer}>
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
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
