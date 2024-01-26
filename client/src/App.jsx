import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import ROUTES from "./Helpers/Routes.helper"
import Landing from './Components/Pages/Landing/Landing';
import Home from './Components/Pages/Home/Home';
import './App.css'
import LoginForm from './Auth/Login/LoginForm';

function App() {


  return (
    <>

      <div>
        <Routes>

          <Route 
          path={ROUTES.LANDING} 
          element={<Landing />}>
          </Route>

          <Route 
          path={ROUTES.HOME} 
          element={<Home />}>
          </Route>

          <Route 
          path={ROUTES.LOGGING} 
          element={<LoginForm />}>
          </Route>

        </Routes>
      </div>

    </>
  )
}

export default App