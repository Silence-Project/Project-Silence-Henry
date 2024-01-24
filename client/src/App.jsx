import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import ROUTES from "./Helpers/Routes.helper"
import './App.css'
import Landing from './Components/Commons/Landing/Landing';
import Home from './Components/Commons/Home/Home';

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

      </Routes>
      </div>
      
    </>
  )
}

export default App
