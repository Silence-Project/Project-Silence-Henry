import React from 'react'

import { useSelector } from 'react-redux'

import ProductCard from '../ProductCard/ProductCard';

import { Link } from 'react-router-dom';

import ROUTES from '../../../Helpers/Routes.helper';



const Favoritos = () => {

    const favoritos = useSelector((state) => state.fav.favoritos);


  return (
    <div>

      <h1>Estos son tus favoritos</h1>

      <div className='favoritos'>
        {favoritos.length === 0 ? <h2>No hay favoritos</h2> : favoritos.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>


    <Link to={ROUTES.HOME}>
      <button className='button'>Volver</button>
    </Link>

    </div>
  )
}

export default Favoritos