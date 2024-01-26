import  { configureStore } from "@reduxjs/toolkit";

import   userReducer  from "./Slices/UserSlice";
import   productReducer  from "./Slices/ProductSlice";



const store = configureStore ({
  reducer: {
    user: userReducer,
    product: productReducer,
    // productsDetail: productReducer
  }

})


export default store;
