import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { gettingUser } from "../Redux/Store/Slices/UserSlice";
import { useAuth0 } from "@auth0/auth0-react";
import URLTOCHANGE from "./routesToChange";

const TakeUserData = () => {
  const { user } = useAuth0();
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchData = async () => {
      try {
        if (!user) return;

        /******************primera peticion, POST trying */
        // Fetch user data from backend
        const response = await fetch(`${URLTOCHANGE.theUrl}/usuarios`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: user.nickname,
            email: user.email,
            password: "Pass1234",
          }),
        });

        // Check if the user data was successfully added to the backend
        if (response.ok) {
          const data = await response.json();
          const userId = data[0].id;
          // console.log("Registro de usuario exitoso. ID de usuario:", userId);
          // console.log("la DATA: ", data);

          /******************segunda peticion, GET */
          // Fetch user data again from backend using the generated userId
          const userDataResponse = await fetch( 
            `${URLTOCHANGE.theUrl}/usuarios/${userId}`
          );

          // Check if the user data was successfully fetched
          if (userDataResponse.ok) {
            const fetchedUserData = await userDataResponse.json();
            setUserData(fetchedUserData);
            dispatch(gettingUser(userId));
          } else {
            throw new Error("No se pudo obtener los datos del usuario");
          }
        } else {
          throw new Error("No se pudo registrar el usuario");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [user]);

  // console.log("puedo usar el obj userData: ", userData);

  return <></>; // Render nada
};

export default TakeUserData;
