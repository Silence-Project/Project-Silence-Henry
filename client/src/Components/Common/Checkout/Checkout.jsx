import React from 'react'
import axios from 'axios'

import { useSelector } from 'react-redux'
import { useState } from 'react'

import { useEffect } from 'react'

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'; 

// import { createOrder } from '../../../Redux/Store/Slices/CarritoSlice'

import { Link } from 'react-router-dom';
import ROUTES from '../../../Helpers/Routes.helper';



const Checkout = () => {

  const [loading, setLoading] = useState(false);
  const cartItems = useSelector(state => state.carrito.productos); 

  useEffect(() => {
      initMercadoPago("TEST-7924176041102676-020617-c6f7ba24c9f07f0449eb1e0d7aa0d874-1153136192");
  }, []);


// const comprarProducto = async (producto) => {
//     const response = await axios.post(
//       "http://localhost:3001/payment",
//       producto
//     )

//     window.location.href = response.data
// }

// console.log("EL ESTADO DE CARRITO:");
// cartItems.forEach(producto => {
//     console.log(`Nombre: ${producto.name}, Cantidad: ${producto.quantity}`);
// });


//   console.log("EL CARRITO CART ITEMSSSSS: " + JSON.stringify(cartItems, null, 2))


//   const {carrito_plano} = JSON.stringify(cartItems, null, 2)



  const create = async () => {
 

    // console.log("EL CARRITO CART ITEMSSSSS PLANO: " + carrito_plano)


    setLoading(true);
      try {

        const productosParaEnviar = {
            items: cartItems.map(producto => ({
              title: producto.name,
              unit_price: producto.price,
              quantity: producto.quantity,
              currency_id: "ARS"
            }))
          };
        


        const response = await axios.post(
            "http://127.0.0.1:3001/payment", productosParaEnviar
          )
          
        
          window.location.href = response.data;// Redirige al usuario al flujo de pago de Mercado Pago

      } catch (error) {
          console.error('Error creating order:', error);
          setLoading(false);
      }
  };



  return (
    <div>

        <button onClick={create} disabled={loading}>{loading ? "Loading..." : "Pagar con Mercado Pago"}</button>

        <Link to={ROUTES.HOME}>
            <button>Home</button>
        </Link>



    </div>
  )
}

export default Checkout