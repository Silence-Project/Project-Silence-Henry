// carritoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios'

export const getCarrito = createAsyncThunk(
  'carrito/obtener',
  async () => {
    const config = {
      method: 'get',
      url: 'http://127.0.0.1:3001/car/cars',
    };

    try {
      const response = await axios(config);
      return await response.data;
    } catch (error) {
      // Retornar un objeto con el error para manejarlo en el reducer
      return { error: error.message };
    }
  }
)

export const createCarrito = createAsyncThunk(
  'carrito/crear',
  async () => {
    const config = {
      method: 'post',
      url: 'http://127.0.0.1:3001/car/new',
      data: {
        idUser: 1,
      },
    };

    try {
      const response = await axios(config);
      return await response.data;
    } catch (error) {
      // Retornar un objeto con el error para manejarlo en el reducer
      return { error: error.message };
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

      const existingProduct = state.productos.find(item => item.id === producto.id);

      if (existingProduct) {
        existingProduct.cantidad++;
      } else {
        state.productos.push({ ...producto, cantidad: 1 });
      }
    },
    eliminarProducto: (state, action) => {
      const { id } = action.payload;
      state.productos = state.productos.filter(producto => producto.id !== id);
    },
    limpiarCarrito: state => {
      state.productos = [];
    },
  },
});

export const { anadirProducto, eliminarProducto, limpiarCarrito } = carritoSlice.actions;

export default carritoSlice.reducer;
