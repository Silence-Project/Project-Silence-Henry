import  { configureStore } from "@reduxjs/toolkit";
import  {userReducer , productReducer}  from "./Slices";


const store = configureStore ({
  reducer: {
    user: userReducer, 
    product: productReducer
  }

})


export default store;
