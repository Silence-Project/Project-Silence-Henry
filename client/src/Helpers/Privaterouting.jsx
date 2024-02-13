import { Outlet, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import URLTOCHANGE from "./routesToChange";

const API_USER_URL = `${URLTOCHANGE.theUrl}/usuarios`

const PrivateRouting = () => {

  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const { nickname, email } = user || {email: "null@null.null"};

  const [localUserData, setLocalUserData] = useState({})

  const authLocal = async () => {
    try {
      const response = await axios(`${API_USER_URL}?email=${email}`);
      const { data } = response;

      setLocalUserData(data);
      // console.log('quesss localUserData??? ', localUserData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    authLocal();
  }, []);

  if (isAuthenticated) {
    return <Outlet context={[localUserData]} />;
  } else {
    return <Navigate to={loginWithRedirect()} />;
  }
};

export default PrivateRouting;
