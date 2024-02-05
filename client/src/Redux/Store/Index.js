import { configureStore } from "@reduxjs/toolkit";

import  userReducer from "./Slices/UserSlice";
import   productReducer  from "./Slices/ProductSlice";
import   carritoReducer  from "./Slices/CarritoSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    carrito: carritoReducer,
  },
});

export default store;
