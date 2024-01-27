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

export default userReducer.reducer;import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "user/signUp",
  async (userCredentials) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/usuarios`,
        userCredentials
      );
      // rta
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log("Respuesta del registro:", response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);


export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/usuarios`, userData
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log("Respuesta de actualización del usuario:", response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Casos para signUp
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        if (action.payload) {
          state.loading = false;
          state.user = action.payload;
          state.error = null;
          console.log("signUp.fulfilled", state.user);
        } else {
          state.loading = false;
          state.user = null;
          state.error = "Error de validación: " + action.error.message;
        }
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Acceso denegado. Credenciales Invalidas";
        } else state.error = action.error.message;
      })
      // Casos para updateUser
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.loading = false;
          state.user = action.payload;
          state.error = null;
          console.log("updateUser.fulfilled", state.user);
        } else {
          state.loading = false;
          state.user = null;
          state.error = "Error de validación: " + action.error.message;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Acceso denegado. Credenciales Invalidas";
        } else state.error = action.error.message;
      });
  },
});


export default userSlice.reducer;
