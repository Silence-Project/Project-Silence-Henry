import { Routes, Route } from "react-router-dom";
import ROUTES from "./Helpers/Routes.helper"
import Landing from './Components/Pages/Landing/Landing';
import Home from './Components/Pages/Home/Home';
import LoginForm from './Auth/Login/LoginForm';
import CreateProduct from './Auth/CreateProduct/CreateProduct';
import Details from './Components/Common/ProductDetail/ProductDetail';

import PolicyReturn from './Components/Pages/PolicyReturn/PolicyReturn'
import FAQSection from './Components/Pages/FAQSection/FAQSection'
import UserRegister from './Components/Pages/userRegister/UserRegister';

import './App.css'
import MyProfile from "./Components/Authentication/MyProfile/MyProfile";

function App() {

  return (
    <>
      <Routes>

        <Route
          path={ROUTES.LANDING}
          element={<Landing />}
        ></Route>

        <Route
          exact path={ROUTES.HOME}
          element={<Home />}
        ></Route>

        <Route
          path={ROUTES.LOGGING}
          element={<LoginForm />}
        ></Route>

        <Route path="/profile" element={<MyProfile />} />

        <Route
          path={ROUTES.FAQSECTION}
          element={<FAQSection />}>
        </Route>

        <Route
          path={ROUTES.REGISTER}
          element={<UserRegister />}>
        </Route>

        <Route
          path={"/detail/:id"}
          element={<Details />}>
        </Route>

        <Route
          path={ROUTES.CREATE_PRODUCT}
          element={<CreateProduct />}
        ></Route>


        <Route
          path={ROUTES.PolicyReturn}
          element={<PolicyReturn />}
        ></Route>


        {/* Redirigir en ruta no existente */}
        <Route path='*' element={<Home />} />

      </Routes>

    </>
  )
}

export default App