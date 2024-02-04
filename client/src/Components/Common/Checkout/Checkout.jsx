import React from 'react'

import { useSelector } from 'react-redux'
import { useState } from 'react'

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'; 

import { createOrder } from '../../../Redux/Store/Slices/CarritoSlice'

const Checkout = () => {

  const [loading, setLoading] = useState(false);
  const cartItems = useSelector(state => state.carrito.productos); 
  useEffect(() => {
      initMercadoPago("TEST-ead547a8-5635-4432-a1fa-43cb1b3d006f");
  }, []);

  const create = async () => {
      setLoading(true);

      try {
         
          const response = await createOrder(cartItems);


          const data = await response.json();

          window.location.href = data.init_point; // Redirige al usuario al flujo de pago de Mercado Pago

      } catch (error) {
          console.error('Error creating order:', error);
          setLoading(false);
      }
  };



  return (
    <div>

        <button onClick={create} disabled={loading}>{loading ? "Loading..." : "Pagar con Mercado Pago"}</button>

    </div>
  )
}

export default Checkout