import { Routes, Route } from "react-router-dom";
import ROUTES from "./Helpers/Routes.helper"
import Landing from './Components/Pages/Landing/Landing';
import Home from './Components/Pages/Home/Home';
import LoginForm from './Auth/Login/LoginForm';
import CreateProduct from './Auth/CreateProduct/CreateProduct';
import Details from './Components/Common/ProductDetail/ProductDetail';

import PolicyReturn from './Components/Pages/PolicyReturn/PolicyReturn'
import UserRegister from './Components/Pages/userRegister/UserRegister';

import CarritoSlides from "./Components/Common/Carrito/Carrito";

// import Checkout from "./Components/Common/Checkout/Checkout";

import './App.css'
import MyProfile from "./Components/Authentication/MyProfile/MyProfile";
import UsersAdmin from "./Components/usersAdmin/UsersAdmin";
import AdminView from "./Components/Pages/AdminView/AdminView";

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

        {/*
        <Route
          path={ROUTES.FAQSECTION}
          element={<FAQSection />}>
        </Route>

        */}

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
          path={ROUTES.ADMIN}
          element={<AdminView />}
        ></Route>


        <Route
          path={ROUTES.PolicyReturn}
          element={<PolicyReturn />}
        ></Route>

        <Route
          path="/carrito"
          element={<CarritoSlides />}
        ></Route>

        {/* <Route
          path="/checkout"
          element={<Checkout />}
        ></Route> */}

      </Routes>

    </>
  )
}

export default App