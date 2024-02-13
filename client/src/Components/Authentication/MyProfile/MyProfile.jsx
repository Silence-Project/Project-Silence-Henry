import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from 'react-redux';
import Head from "../../Common/Header/Head";
import Footer from "../../Common/FooterView/Footer";
import TabsView from "../TabsView/TabsView";
import style from "./MyProfile.module.css"
import AdminView from "../../Pages/AdminView/AdminView";


const MyProfile = () => {

  const { user, isAuthenticated, loginWithRedirect, isLoading, logout } = useAuth0();

  const currentUser = useSelector((state) => state.user.user)
  // console.log('existo? ', currentUser);

  if (isLoading) {
    return <div>Cargando...</div>
  }

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      }
    });

  return (
    <>
      <Head />
      <div className={style.profileContainer}>
        <div>
          <h2>Hola, {currentUser.firstName}.</h2>
        </div>
        <aside>
          <TabsView currentUser={currentUser} />
        </aside>
        {
          currentUser.isAdmin ? <AdminView /> : null
        }
        <button onClick={() => logoutWithRedirect()}>
          Cerrar sesión
        </button>
      </div>
      <Footer />
    </>
  )
};

export default MyProfile;