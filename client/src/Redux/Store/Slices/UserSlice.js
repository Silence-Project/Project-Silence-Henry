import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
name: 'user',
initialState: {
  loading: false, 
  user: null, 
  error: null
},
    reducers: {
        addUser: (state, action) => {

            state.loading = true;
            state.products = action.payload;
            state.error = error.message
        }
      }
});


export const { addUser } = userReducer.actions;

export default userReducer.reducer;