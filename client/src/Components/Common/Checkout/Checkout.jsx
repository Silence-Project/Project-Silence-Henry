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
      "TEST-7924176041102676-020617-c6f7ba24c9f07f0449eb1e0d7aa0d874-1153136192"
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

      const response = await axios.post(`${URLTOCHANGE.theUrl}/payment`, dataToSend)


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
