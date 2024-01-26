import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import ROUTES from "./Helpers/Routes.helper"
import Landing from './Components/Pages/Landing/Landing';
import Home from './Components/Pages/Home/Home';
import './App.css'
import LoginForm from './Auth/Login/LoginForm';
import FAQSection from './components/Pages/FAQSection/FAQSection';

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

          <Route 
          path={ROUTES.FAQSECTION} 
          element={<FAQSection />}>
          </Route>

        </Routes>
      </div>

    </>
  )
}

export default App