// import { Routes, Route } from "react-router-dom";
// import ROUTES from "./Helpers/Routes.helper"
// import Landing from './Components/Pages/Landing/Landing';
// import Home from './Components/Pages/Home/Home';
// import LoginForm from './Auth/Login/LoginForm';
// import CreateProduct from './Auth/CreateProduct/CreateProduct';
// import Details from './Components/Common/ProductDetail/ProductDetail';

// import PolicyReturn from './Components/Pages/PolicyReturn/PolicyReturn'
// import UserRegister from './Components/Pages/userRegister/UserRegister';

// import CarritoSlides from "./Components/Common/Carrito/Carrito";

// import Checkout from "./Components/Common/Checkout/Checkout";

// import './App.css'
// import MyProfile from "./Components/Authentication/MyProfile/MyProfile";
// import PrivateRouting from "./Components/Authentication/PrivateRouting/Privaterouting";
// import UsersAdmin from "./Components/usersAdmin/UsersAdmin";

// function App() {

//   return (
//     <>
//       <Routes>

//         <Route
//           path={ROUTES.LANDING}
//           element={<Landing />}
//         ></Route>

//         <Route
//           exact path={ROUTES.HOME}
//           element={<Home />}
//         ></Route>

//         <Route
//           path={ROUTES.LOGGING}
//           element={<LoginForm />}
//         ></Route>

//         <Route path="/profile" element={<MyProfile />} />

        
//         <Route
//           path={ROUTES.FAQSECTION}
//           element={<FAQSection />}>
//         </Route>

       

//         <Route
//           path={ROUTES.REGISTER}
//           element={<UserRegister />}>
//         </Route>

//         <Route
//           path={"/detail/:id"}
//           element={<Details />}>
//         </Route>

//         <Route
//           path={ROUTES.CREATE_PRODUCT}
//           element={<CreateProduct />}
//         ></Route>


//         <Route
//           path={ROUTES.PolicyReturn}
//           element={<PolicyReturn />}
//         ></Route>

//         <Route
//           path="/carrito"
//           element={<CarritoSlides />}
//         ></Route>

//         <Route
//           path="/checkout"
//           element={<Checkout />}
//         ></Route>

//       </Routes>

//     </>
//   )
// }

// export default App


import { Routes, Route } from "react-router-dom";
import ROUTES from "./Helpers/Routes.helper";
import Landing from "./Components/Pages/Landing/Landing";
import Home from "./Components/Pages/Home/Home";
import LoginForm from "./Auth/Login/LoginForm";
import Details from "./Components/Common/ProductDetail/ProductDetail";

import PolicyReturn from "./Components/Pages/PolicyReturn/PolicyReturn";
import UserRegister from "./Components/Pages/userRegister/UserRegister";

import AdminView from "./Components/Pages/AdminView/AdminView";
import CreateCategoryModal from "./Auth/CreateProduct/CreateCategoryModal";
import CarritoSlides from "./Components/Common/Carrito/Carrito";
import Checkout from "./Components/Common/Checkout/Checkout";

import "./App.css";
import MyProfile from "./Components/Authentication/MyProfile/MyProfile";
import PrivateRouting from "./Helpers/Privaterouting";
import UsersAdmin from "./Components/usersAdmin/UsersAdmin";
import FAQSection from './Components/Pages/FAQSection/FAQSection'

import ColaborationLanding from "./Components/Pages/ColaborationLanding/ColaborationLanding";

import QuienesSomos from "./Components/Pages/QuienesSomos/QuienesSomos";
import PayConfirmation from "./Components/Pages/PayConfirmation";
import PayFailed from "./Components/Pages/PayFailed";

import Fav from "./Components/Common/favoritos/Favoritos";

import Suspension from "./Components/Common/Suspencion/Suspencion.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.LANDING} element={<Landing />}></Route>

        <Route exact path={ROUTES.HOME} element={<Home />}></Route>

        <Route path={ROUTES.LOGGING} element={<LoginForm />}></Route>

        <Route element={<PrivateRouting />}>
          <Route path={ROUTES.PROFILE} element={<MyProfile />} />
        </Route>

        <Route element={<QuienesSomos />} path="/about"></Route>

        <Route path={ROUTES.ANDINO} element={<ColaborationLanding />} />

        {
        <Route
          path={ROUTES.FAQSECTION}
          element={<FAQSection />}>
        </Route>
        }

        <Route path={ROUTES.REGISTER} element={<UserRegister />}></Route>

        <Route path={"/detail/:id"} element={<Details />}></Route>

        <Route element={<PrivateRouting />}>
          <Route path={ROUTES.CREATE_PRODUCT} element={<AdminView />} />
        </Route>

        <Route element={<PrivateRouting />}>
          <Route path={ROUTES.CREATE_PRODUCT} element={<UsersAdmin />} />
        </Route>

        <Route element={<PrivateRouting />}>
          <Route path={ROUTES.ADMIN} element={<AdminView />}></Route>
        </Route>

        <Route path={ROUTES.PolicyReturn} element={<PolicyReturn />}></Route>

        <Route path={ROUTES.MODAL} element={<CreateCategoryModal />}></Route>

        <Route path="/carrito" element={<CarritoSlides />}></Route>

        <Route path="/checkout" element={<Checkout />}></Route>

        <Route path="/paymentconfirmation" element={<PayConfirmation />}></Route>
        <Route path="/paymenterror" element={<PayFailed />}></Route>

        <Route path="/favoritos" element={<Fav />}></Route>

        <Route path="/suspension" element={<Suspension  />}></Route>

      </Routes>
    </>
  );
}

export default App;
