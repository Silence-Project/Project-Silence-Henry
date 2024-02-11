// Carrito.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Helpers/Routes.helper';

import { eliminarProducto } from "../../../Redux/Store/Slices/CarritoSlice";

import styles from './Carrito.module.css'

const CarritoSlides = () => {

  const dispatch = useDispatch();
  const productos = useSelector(state => state.carrito.productos);

  const totales = []

  if (productos.length === 0) {
    return <p>No hay productos en el carrito</p>;
  }
  
  // const handlerDrop = (idProducto)=> {
  //   console.log('Hola Soy el botón eliminar');
  //   const dropProd = dispatch(eliminarProducto(idProducto))
  //   console.log(dropProd);
  //   return dropProd
  // }

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
          <th></th>
        </tr>
        {productos.map(producto => (  
          <>
            <tr key={producto.id}>
              <td className={styles.name}>{producto.name}</td>
              <td className={styles.cantidad}>{producto.cantidad}</td>
              <td className={styles.price}>{producto.price}</td>
              <td className={styles.totalUnitario}>{totales.push(producto.price * producto.cantidad) && producto.price * producto.cantidad}</td>
              <td className={styles.button}> 
                {/* <button onClick={handlerDrop(producto.id)}>Eliminar</button>  */}
                <button>Eliminar</button>
              </td>
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
