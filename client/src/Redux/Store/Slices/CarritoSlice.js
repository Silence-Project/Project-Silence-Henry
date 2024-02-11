// carritoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios'

export const deleteProductDb = createAsyncThunk(
  'carrito/deleteProductDb',
  async (idCarrito, idProduct) => {
    const config = {
      method: 'delete',
      url: `http://127.0.0.1:3001/car/remove/${idCarrito}/${idProduct}`
    };

    try {
      const response = await axios(config);
      return await response;
    } catch (error) {
      // Retornar un objeto con el error para manejarlo en el reducer
      return { error: error.message };
    }
  }
)

export const saveProductDb = createAsyncThunk(
  'carrito/saveProductDb',
  async ({idUser, arrayIdProduct, quantity}) => {

    const stringIdProduct = arrayIdProduct.join("")

    console.log('------------------------------------------------------------------------------');
    console.log('dates Save Products');
    console.log('Id User: ');
    console.log(idUser);
    console.log('Id Producto: ');
    console.log(stringIdProduct);
    console.log('Cantidad, quantity: ')
    console.log(quantity);
    console.log('------------------------------------------------------------------------------');

    const config = {
      method: 'post',
      url: 'http://127.0.0.1:3001/car/newProduct'
    };

    let data = {
      carId: idUser,
      productId: stringIdProduct,
      quantity: quantity
    };

    try {
      const response = await axios(config, data);
      console.log(response.data);
      return await response.data;
    } catch (error) {
      // Retornar un objeto con el error para manejarlo en el reducer
      return { error: error.message };
    }
  }
)

export const getCarrito = createAsyncThunk(
  'carrito/obtener',
  async (idUser) => {

    const config = {
      method: 'get',
      url: `http://127.0.0.1:3001/car/car/${idUser}`
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
  async (idUser) => {

    console.log('--------------------------------');
    console.log(idUser);
    console.log('--------------------------------');

    const config = {
      method: 'post',
      url: 'http://127.0.0.1:3001/car/new',
      data: {
        idUser: idUser,
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

      //console.log("QUANTITY ACA ->" + producto.quantity)
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
  }
});


export const { anadirProducto, eliminarProducto, limpiarCarrito } = carritoSlice.actions;

export default carritoSlice.reducer;
