import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useOutletContext } from "react-router-dom";
import Head from "../../Common/Header/Head";
import Footer from "../../Common/FooterView/Footer";
import TabsView from "../TabsView/TabsView";
import TakeUserData from "../../../Helpers/TakeUserData";
import style from "./MyProfile.module.css"
import AdminView from "../../Pages/AdminView/AdminView";

const MyProfile = () => {

  const { user, isAuthenticated, loginWithRedirect, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>
  }

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      }
    });

  const [localUserData] = useOutletContext();
  console.log('habra llegado herencia?? ', localUserData);

  return (
    // !user ? loginWithRedirect() :
    // isAuthenticated && (
    <>
      <Head />
      <div className={style.profileContainer}>
        <div>
          <h2>Hola, {user.nickname}.</h2>
        </div>
        <aside>
          <TabsView localUserData={localUserData} />
        </aside>
{
  localUserData.isAdmin ? <AdminView /> : null
}
        <button onClick={() => logoutWithRedirect()}>
          Cerrar sesión
        </button>
        {/* <TakeUserData /> */}
      </div>
      <Footer />
    </>
    // )
  )
};

export default MyProfile;