import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthLoginButtton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In Auth0</button>;
};

export default AuthLoginButtton;
//https://i.postimg.cc/9z5FwpW7/silence-logo.jpg