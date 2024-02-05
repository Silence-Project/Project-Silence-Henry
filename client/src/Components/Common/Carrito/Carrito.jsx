// Carrito.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Helpers/Routes.helper';



const CarritoSlides = () => {
  const productos = useSelector(state => state.carrito.productos);

  if (productos.length === 0) {
    return <p>No hay productos en el carrito</p>;
  }


  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            {producto.nombre} - Cantidad: {producto.cantidad}
          </li>
        ))}
      </ul>

      <Link to="/checkout">
        <button>Comprar</button>
      </Link>
    
    <br></br>

    <Link to={ROUTES.HOME}>
      <button>Home</button>
    </Link>


    </div>

  );
};

export default CarritoSlides;
