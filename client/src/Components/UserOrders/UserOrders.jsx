import React from "react";
import axios from "axios";
import URLTOCHANGE from "../../Helpers/routesToChange";

const UserOrders = ({currentUser}) => {

  const { id } = currentUser;

  async function consultOrders() {
    const response = await axios(`${URLTOCHANGE.theUrl}/orders/${id}`);
    console.log('que es response?', response);
  }


  return(
    <div>
      {/* hola */}
    </div>
  )
}

export default UserOrders;