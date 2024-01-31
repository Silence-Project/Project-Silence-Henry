import React from 'react'

import { Link } from 'react-router-dom'

import ROUTES from '../../../Helpers/Routes.helper'

import style from './ProductCard.module.css'

const ProductCard = ({product}) => {

  const { id, name, image, precio_venta, descripcion, stock, color, categoria, peso, codigo } = product

  return (

    <div className={style.absolute}>
    <div className={style.productDetail}>

        <Link to={/detail/+id}>

            <div className='info'>

            <h2 className={style.productName}>{descripcion}</h2>
{/* 
            <img src={image.map((image, index) => 
            <p key={index} className="card-image">{image}</p>)} 
            
            alt={name}/> */}

            <img className={style.productImage} src={image} alt={descripcion}/>

             <p>💸 {precio_venta}</p>
          
          
{/*             
            <p>{description}</p>
            <p>{stock}</p>
           
            <p>{color}</p>
            <p>{categoria}</p>
            <p>{peso}</p> */}


            {/*  <button>{COMPONENT.carrito}</button> */}
            {/* <p>{COMPONENT.rating}</p> */}

            </div>

        </Link>

    </div>

    </div>

  )
}

export default ProductCard;


