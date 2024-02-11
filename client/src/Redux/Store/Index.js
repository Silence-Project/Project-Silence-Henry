import { configureStore } from "@reduxjs/toolkit";

import  userReducer from "./Slices/UserSlice";
import   productReducer  from "./Slices/ProductSlice";
import   carritoReducer  from "./Slices/CarritoSlice";
// import   checkoutReducer  from "./Slices/CheckoutSlice";
import   favReducer  from "./Slices/FavSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    carrito: carritoReducer,
    // checkout: checkoutReducer,
    fav: favReducer,
  },
});

export default store;
