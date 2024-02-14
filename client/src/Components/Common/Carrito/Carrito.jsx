// Carrito.jsx
import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Helpers/Routes.helper';

import Head from "../../Common/Header/Head";

import Footer from "../../Common/FooterView/Footer";

import styles from './Carrito.module.css'

import { getCarrito, sincronizarDB, deleteProductDb } from "../../../Redux/Store/Slices/CarritoSlice";

const CarritoSlides = () => {

  const dispatch = useDispatch();
  const productos = useSelector(state => state.carrito.productos);
  const products = useSelector((state) => state.product.products);

  const currentUser = useSelector((state) => state.user.user)

  const IdUserConsu = ()=>{
    console.log(currentUser.id);
    return currentUser.id
  }

  const idUser = IdUserConsu()

  const syncronized = async() => {

    const carritoa = await dispatch(getCarrito(idUser))
    const carritob = carritoa.payload ? carritoa.payload : null

    const productosDb = carritob
    dispatch(sincronizarDB({productos, productosDb, products}))    
  }

  const handlerDrop = async (idProducto) => {

    const carritoa = await dispatch(getCarrito(idUser))
    const carritob = carritoa.payload ? carritoa.payload : null

    const idCarrito = carritob[0].id

    let arrayIdProduct = idProducto.split("")

    const response = await dispatch(deleteProductDb({idCarrito, arrayIdProduct}))
    console.log(response.payload);

  }

  const handlerBorrarTodo = async(idProductos) => {
    console.log(idProductos);    
    const resultados = idProductos.map(element => handlerDrop(element));
    console.log(resultados);
  }

  useEffect(() => {
    syncronized()
  }, [productos]);

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

  const idProducts = productos.map(element => element.id);

  return (
    <>
      <Head/>
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
                  <button onClick={() => handlerDrop(producto.id)}>Eliminar</button>
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

        <button onClick={() => handlerBorrarTodo(idProducts)}>Borrar todo</button>

        <Link to="/checkout" >
          <button>Comprar</button>
        </Link>
      
      <br></br>

      <Link to={ROUTES.HOME}>
        <button>Home</button>
      </Link>

      </div>
      <Footer/>
    </>

  );
};

export default CarritoSlides;
