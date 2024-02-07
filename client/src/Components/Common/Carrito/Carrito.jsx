// Carrito.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Helpers/Routes.helper';

import styles from './Carrito.module.css'

const CarritoSlides = () => {

  const productos = useSelector(state => state.carrito.productos);



  const totales = []

  if (productos.length === 0) {
    return <p>No hay productos en el carrito</p>;
  }

  console.log(productos);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Carrito de Compras</h2>
      <br />
      <table className={styles.table}>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Precio Total</th>
        </tr>
        {productos.map(producto => (  
          <>
            <tr key={producto.id}>
              <td className={styles.name}>{producto.name}</td>
              <td className={styles.cantidad}>{producto.cantidad}</td>
              <td className={styles.price}>{producto.price}</td>
              <td className={styles.totalUnitario}>{totales.push(producto.price * producto.cantidad) && producto.price * producto.cantidad}</td>
            </tr>
          </>                

        ))}
          <tr className={styles.lastTotal}>
            <td></td>
            <td></td>
            <td className={styles.totalComprasText}>Total de compra:</td>
            <td className={styles.totalCompras}>{totales ? totales.reduce((acumulador, valorActual) => acumulador + valorActual, 0) : 0}</td>
          </tr>
      </table>

      <Link to="/checkout" >
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
