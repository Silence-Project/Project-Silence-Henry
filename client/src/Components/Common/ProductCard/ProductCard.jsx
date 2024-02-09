import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import ROUTES from '../../../Helpers/Routes.helper'

import style from './ProductCard.module.css'

import { useDispatch } from 'react-redux';

import { anadirProducto } from '../../../Redux/Store/Slices/CarritoSlice';

const ProductCard = ({product}) => {

  const { id, name, image, price, description, stock, color, categoria, peso, codigo } = product

  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(anadirProducto(product));
  }


  // console.log(product)

  return (

    <div className={style.absolute}>
      <div className={style.productDetail}>

        <div className='info'>
        <Link to={/detail/+id}>
          <h2 className={style.productName}>{name}</h2>
        </Link>
        {/* 
          <img src={image.map((image, index) => 
          <p key={index} className="card-image">{image}</p>)} 
          
          alt={name}/> 
        */}

        <img className={style.productImage} src={image} alt={description}/>

        <p>💸 {price}</p>        
      
        {/*             
        <p>{description}</p>
        <p>{stock}</p>
        
        <p>{color}</p>
        <p>{categoria}</p>
        <p>{peso}</p> */}


        {/*  <button>{COMPONENT.carrito}</button> */}
        {/* <p>{COMPONENT.rating}</p> */}

        </div>
      </div>
    </div>

  )
}

export default ProductCard;


