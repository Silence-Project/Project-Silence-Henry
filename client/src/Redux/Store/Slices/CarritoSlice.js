
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { URLTOCHANGE } from '../../../Helpers/Routes.helper';


import { createAsyncThunk } from '@reduxjs/toolkit'

export const getCar = createAsyncThunk(
  "cars",
  async () => {
      try {
          const response = await axios.get(`${URLTOCHANGE}/car/cars`);
          localStorage.setItem("car", JSON.stringify(response.data));

          return response.data;
      }

      catch (error) {
          console.log(error);
      }}
)


export const postCar = createAsyncThunk(
  "car/new",
  async (car) => {
      try {
          const response = await axios.post(`${URLTOCHANGE}/car/new` , car);

          return response.data;
      }

      catch (error) {
          console.log(error);
      }
  }

)




export const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    productos: [],
  },
  reducers: {
    anadirProducto: (state, action) => {
        
      const producto = action.payload;




      console.log("QUANTITY ACA ->" + producto.quantity)
      const existingProduct = state.productos.find(item => item.id === producto.id);

      if (existingProduct) {
        existingProduct.cantidad++;
        existingProduct.quantity = existingProduct.cantidad
      } else {
        state.productos.push({ ...producto, cantidad: 1, quantity: 1 });
      }
    },
    eliminarProducto: (state, action) => {
      const { id } = action.payload;
      state.productos = state.productos.filter(producto => producto.id !== id);
    },
    limpiarCarrito: state => {
      state.productos = [];
    },
    
  } ,
  extraReducers: (builder) => {
    builder
      .addCase(getCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCar.fulfilled, (state, action) => {
        state.loading = false;
        state.productos = action.payload;
        state.error = null;
      })
      .addCase(getCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postCar.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
    }
  
  });


export const { anadirProducto, eliminarProducto, limpiarCarrito } = carritoSlice.actions;

export default carritoSlice.reducer;
