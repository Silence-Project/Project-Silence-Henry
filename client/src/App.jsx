import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import ROUTES from "./Helpers/Routes.helper"
import Landing from './Components/Pages/Landing/Landing';
import Home from './components/Pages/Home/Home';
import LoginForm from './Auth/Login/LoginForm';
import FAQSection from './components/Pages/FAQSection/FAQSection';
import UserRegister from './Components/Pages/userRegister/UserRegister';


import Details from './components/Common/ProductDetail/ProductDetail';

import './App.css'


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
            exact path={ROUTES.HOME} 
            element={<Home/>}>
          </Route>

          <Route 
            path={ROUTES.LOGGING} 
            element={<LoginForm />}>
          </Route>

          <Route 
          path={ROUTES.FAQSECTION} 
          element={<FAQSection />}>
          </Route>

          <Route 
          path={ROUTES.REGISTER} 
          element={<UserRegister/>}>
          </Route>
     
          <Route
            path={ROUTES.DETAIL}
            element={<Details />}>
          </Route>

        </Routes>
      </div>

    </>
  )
}

export default App