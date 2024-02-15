// import React from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useEffect } from "react";
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
// import { Link } from "react-router-dom";
// import ROUTES from "../../../Helpers/Routes.helper";
// // import { createOrder } from '../../../Redux/Store/Slices/CarritoSlice'

// const Checkout = () => {
//   const [loading, setLoading] = useState(false);
//   const cartItems = useSelector((state) => state.carrito.productos);

//   useEffect(() => {
//     initMercadoPago(
//       "TEST-7924176041102676-020617-c6f7ba24c9f07f0449eb1e0d7aa0d874-1153136192"
//     );
//   }, []);

//   // const comprarProducto = async (producto) => {
//   //     const response = await axios.post(
//   //       "http://localhost:3001/payment",
//   //       producto
//   //     )

//   //     window.location.href = response.data
//   // }

//   // console.log("EL ESTADO DE CARRITO:");
//   // cartItems.forEach(producto => {
//   //     console.log(`Nombre: ${producto.name}, Cantidad: ${producto.quantity}`);
//   // });

//   //   console.log("EL CARRITO CART ITEMSSSSS: " + JSON.stringify(cartItems, null, 2))

//   //   const {carrito_plano} = JSON.stringify(cartItems, null, 2)

//   const create = async () => {
//     setLoading(true);
//     try {
//       const products =  cartItems; //el puerco [0]
      
//       console.log("Data QUE ME ENVIA:", products); // Ver lo enviado


//       // const productoParaEnviar = {
//       //   title: products.name,
//       //   unit_price: products.price,
//       //   quantity: products.quantity,
//       //   currency_id: "ARS", 
//       // };

//       for (let i = 0; i < products.length; i++) {
//         const productoParaEnviar = {
//           title: products[i].name,
//           unit_price: products[i].price,
//           quantity: products[i].quantity,
//           currency_id: "ARS",

//         }
//         const response = await axios.post(
//           "http://127.0.0.1:3001/payment",
//           productoParaEnviar
//         )

//       }


      
//       console.log("Data send:", productoParaEnviar); // Ver lo enviado

//       // const response = await axios.post(
//       //   "http://127.0.0.1:3001/payment",
//       //   productoParaEnviar
//       // );

//       console.log("server response data:", response.data); // Ver la respuesta del servidor

//       window.location.href = response.data; // Redirige al usuario al flujo de pago de Mercado Pago
//     } catch (error) {
//       console.error("Error creating order:", error);
//       setLoading(false);
//     }
//   };
//   return (
//     <div>
//       <button onClick={create} disabled={loading}>
//         {loading ? "Loading..." : "Pagar con Mercado Pago"}
//       </button>

//       <Link to={ROUTES.HOME}>
//         <button>Home</button>
//       </Link>
//     </div>
//   );
// };

// export default Checkout;


// import React from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useEffect } from "react";
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
// import { Link } from "react-router-dom";
// import ROUTES from "../../../Helpers/Routes.helper";
// // import { createOrder } from '../../../Redux/Store/Slices/CarritoSlice'

// const Checkout = () => {
//   const [loading, setLoading] = useState(false);
//   const cartItems = useSelector((state) => state.carrito.productos);

//   useEffect(() => {
//     initMercadoPago(
//       "TEST-7909151566023789-020320-28f9947285f078d584798239f6c0e39c-304832536"
//     );
//   }, []);

//   // const comprarProducto = async (producto) => {
//   //     const response = await axios.post(
//   //       "http://localhost:3001/payment",
//   //       producto
//   //     )

//   //     window.location.href = response.data
//   // }

//   // console.log("EL ESTADO DE CARRITO:");
//   // cartItems.forEach(producto => {
//   //     console.log(Nombre: ${producto.name}, Cantidad: ${producto.quantity});
//   // });

//   //   console.log("EL CARRITO CART ITEMSSSSS: " + JSON.stringify(cartItems, null, 2))

//   //   const {carrito_plano} = JSON.stringify(cartItems, null, 2)

//   const create = async () => {
//     setLoading(true);
//     try {
//       const products =  cartItems; //el puerco [0]

//       console.log("Data QUE ME ENVIA:", products); // Ver lo enviado

//       const dataToSend = products.map((product) => {
//         return {
//           title: product.name,
//           unit_price: product.price,
//           quantity: product.quantity,
//           currency_id: "ARS"
//         }
//       })

//       console.log(dataToSend);

//       const response = await axios.post('http://127.0.0.1:3001/payment', dataToSend)


//       // const productoParaEnviar = {
//       //   title: products.name,
//       //   unit_price: products.price,
//       //   quantity: products.quantity,
//       //   currency_id: "ARS", 
//       // };

//       // for (let i = 0; i < products.length; i++) {
//       //   let productoParaEnviar = {
//       //     title: products[i].name,
//       //     unit_price: products[i].price,
//       //     quantity: products[i].quantity,
//       //     currency_id: "ARS",

//       //   }
//       //   console.log("Data send:", productoParaEnviar); // Ver lo enviado
//       //   let response = await axios.post(
//       //     "http://127.0.0.1:3001/payment",
//       //     productoParaEnviar
//       //   )

//       // }

//       // console.log("Data send:", productoParaEnviar); // Ver lo enviado

//       // const response = await axios.post(
//       //   "http://127.0.0.1:3001/payment",
//       //   productoParaEnviar
//       // );

//       // console.log("server response data:", response.data); // Ver la respuesta del servidor

//       window.location.href = response.data; // Redirige al usuario al flujo de pago de Mercado Pago
//     } catch (error) {
//       console.error("Error creating order:", error);
//       setLoading(false);
//     }
//   };
//   return (
//     <div>
//       <button onClick={create} disabled={loading}>
//         {loading ? "Loading..." : "Pagar con Mercado Pago"}
//       </button>

//       <Link to={ROUTES.HOME}>
//         <button>Home</button>
//       </Link>
//     </div>
//   );
// };

// export default Checkout;


import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../Helpers/Routes.helper";
import URLTOCHANGE from "../../../Helpers/routesToChange";
// import { createOrder } from '../../../Redux/Store/Slices/CarritoSlice'
import Head from "../Header/Head";
import Footer from "../FooterView/Footer";
import styles from "./checkout.module.css";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state) => state.carrito.productos);

  useEffect(() => {
    initMercadoPago(
      "TEST-7909151566023789-020320-28f9947285f078d584798239f6c0e39c-304832536"
    );
  }, []);



  const create = async () => {
    setLoading(true);
    try {
      const products =  cartItems; //el puerco [0]

      console.log("Data QUE ME ENVIA:", products); // Ver lo enviado

      const dataToSend = products.map((product) => {
        return {
          title: product.name,
          unit_price: product.price,
          quantity: product.quantity,
          currency_id: "ARS"
        }
      })

      console.log(dataToSend);

      // const response = await axios.post(`${URLTOCHANGE}/payment`, dataToSend)
      const response = await axios.post(`http://127.0.0.1:3001/payment`, dataToSend)


      window.location.href = response.data; // Redirige al usuario al flujo de pago de Mercado Pago
    } catch (error) {
      console.error("Error creating order:", error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Head/>
      <button onClick={create} disabled={loading}>
        {loading ? "Loading..." : "Pagar con Mercado Pago"}
      </button>

      <div>
          <button className={styles.floating_btn}>
            <NavLink to={"/home"}>Back home</NavLink>
          </button>
        </div>
      <Footer/>
    </div>
  );
};

export default Checkout;