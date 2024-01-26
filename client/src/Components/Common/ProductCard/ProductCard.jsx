import React from 'react'

import { Link } from 'react-router-dom'

import ROUTES from '../../../Helpers/Routes.helper'

const ProductCard = ({products}) => {
  return (
    <div className="product-detail">

        <Link to={`${ROUTES.DETAIL}${products.id}`}>

            <div>

            <h2>{products.name}</h2>
{/* 
            <img src={products.image.map((image, index) => 
            <p key={index} className="card-image">{image}</p>)} 
            
            alt={products.name}/> */}

            <img src={products.image} alt={products.name}/>

             <p>{products.price}</p>
          
          
{/*             
            <p>{products.description}</p>
            <p>{products.stock}</p>
           
            <p>{products.color}</p>
            <p>{products.categoria}</p>
            <p>{products.peso}</p> */}


            {/* <button>{COMPONENT.carrito}</button> */}
            {/* <p>{COMPONENT.rating}</p> */}

            </div>

        </Link>

    </div>
  )
}

export default ProductCard;
