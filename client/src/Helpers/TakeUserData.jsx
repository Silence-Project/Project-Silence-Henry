import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { URLTOCHANGE } from "./Routes.helper";

const TakeUserData = () => {

  const { user } = useAuth0();

  if (!user) return null;

  const { nickname, name, email } = user;


  
  // Realizar el registro del usuario en el backend
  const createLocalSignUp = async () => {
    // console.log("Enviando datos de usuario al servidor para registro...");
    const response = await fetch(`${URLTOCHANGE}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: nickname,
        email,
        password: "Pass1234", // Enviar la contraseña generada al servidor
      }),
    });

    // Verificar la respuesta del servidor
    if (response.ok) {
      // Obtener los datos de la respuesta
      const data = await response.json();
      const userId = data.id;
      console.log("Registro de usuario exitoso. ID de usuario:", userId);
    }
  }

  createLocalSignUp();

  return (
    // <h2>nada</h2>
    <></>
  )
}

export default TakeUserData;