import React from "react";
import axios from "axios";
import URLTOCHANGE from "../../Helpers/routesToChange";
import style from "./UserOrders.module.css";

const UserOrders = ({currentUser}) => {

  const { id } = currentUser;

  async function consultOrders() {
    const response = await axios(`${URLTOCHANGE.theUrl}/orders/${id}`);
    console.log('que es response?', response);
  }

  const simulaOrders = [
    {
      id: 1,
      statePayment: "completado",
      ShippingMethod: "correos argentina",
      createdAt: "2024-02-02 00:00:00",
      updatedAt: "2024-02-02 00:00:00",
      idUserOrder: 2
    },
    {
      id: 2,
      statePayment: "completado",
      ShippingMethod: "correos argentina",
      createdAt: "2024-02-03 00:00:00",
      updatedAt: "2024-02-03 00:00:00",
      idUserOrder: 2
    },
    {
      id: 7,
      statePayment: "cancelado",
      ShippingMethod: "correos argentina",
      createdAt: "2024-02-02 00:00:00",
      updatedAt: "2024-02-02 00:00:00",
      idUserOrder: 2
    }
  ]

  return(
    <div className={style.fullOrderContainer}>
      {
        simulaOrders.map(order => (
          <div key={order.id} className={style.orderContainer}>
            <p>Fecha: {order.createdAt}</p>
            <p>Status: {order.statePayment}</p>
            <p>Método de entrega: {order.ShippingMethod}</p>
          </div>
        ))
      }
    </div>
  )
}

export default UserOrders;