import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./Slices/UserSlice";
import productReducer from "./Slices/ProductSlice";
import carritoReducer from "./Slices/CarritoSlice";
import adminReducer from "./Slices/AdminSlice";
// import   checkoutReducer  from "./Slices/CheckoutSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    carrito: carritoReducer,
    admin: adminReducer,
    // checkout: checkoutReducer,
  },
});

export default store;
