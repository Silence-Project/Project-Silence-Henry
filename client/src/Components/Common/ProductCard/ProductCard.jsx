import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import ROUTES from '../../../Helpers/Routes.helper'

import style from './ProductCard.module.css'

const ProductCard = ({product}) => {

  const { id, name, image, precio_venta, descripcion, stock, color, categoria, peso, codigo } = product

  return (
    <div className={style.productDetail}>

        <NavLink to={`${ROUTES.DETAIL}?codigo=${codigo}`}>

            <div className='info'>

            <h2 className={style.productName}>{descripcion}</h2>
{/* 
            <img src={image.map((image, index) => 
            <p key={index} className="card-image">{image}</p>)} 
            
            alt={name}/> */}

            <img className={style.productImage} src={'https://i.pinimg.com/236x/0e/4f/ce/0e4fce603341659d87362c2666530f3d.jpg'} alt={descripcion}/>

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

        </NavLink>

    </div>
  )
}

export default ProductCard;


