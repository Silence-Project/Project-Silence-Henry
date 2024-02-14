import React, {useState, useEffect} from "react";
import axios from "axios";
import URLTOCHANGE from "../../Helpers/routesToChange";
import style from "./UserOrders.module.css";

const UserOrders = ({currentUser}) => {

  const { id } = currentUser;

  const [myOrders, setMyOrders] = useState([]);

  useEffect(()=> {

    const consultOrders = async () => {
      try {
        const response = await axios(`${URLTOCHANGE.theUrl}/orders/${id}`);
        // console.log('que es response?', response);
        const data = response.data;
        setMyOrders(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
    consultOrders();
  }, [])


  return(
    <div className={style.fullOrderContainer}>
      {
        myOrders && myOrders.map(order => (
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