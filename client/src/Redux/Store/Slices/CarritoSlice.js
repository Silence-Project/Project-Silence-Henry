// carritoSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios'
import URLTOCHANGE from '../../../Helpers/routesToChange';

export const deleteProductDb = createAsyncThunk(
  'carrito/deleteProductDb',
  async ({idCarrito, arrayIdProduct}) => {

    const idProduct = arrayIdProduct.join("")

    console.log(idProduct);

    try {
      const response = await axios.delete(`${URLTOCHANGE}/car/remove/${idCarrito}/${idProduct}`);
      return await response;
    } catch (error) {
      return { error: error.message };
    }
  }
)

export const saveProductDb = createAsyncThunk(
  'carrito/saveProductDb',
  async ({idCarrito, arrayIdProduct, quantity}) => {

    const stringIdProduct = arrayIdProduct.join("")

    let data = {
      carId: idCarrito[0]['id'],
      productId: stringIdProduct,
      quantity: quantity
    };

    try {
      const response = await axios.post(`${URLTOCHANGE}/car/newProduct`, data);
      return await response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
)

export const getCarrito = createAsyncThunk(
  'carrito/obtener',
  async (idUser) => {

    const config = {
      method: 'get',
      url: `${URLTOCHANGE}/car/car/${idUser}`
    };

    try {
      const response = await axios(config);
      return await response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
)

export const createCarrito = createAsyncThunk(
  'carrito/crear',
  async (idUser) => {
    const config = {
      method: 'post',
      url: `${URLTOCHANGE}/car/new`,
      data: {
        idUser: idUser,
      },
    };    

    try {
      const response = await axios(config);
      return await response.data;
    } catch (error) {
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
    sincronizarDB: (state, action) => {

      const {productosDb} = action.payload

      const productosFinal = []
      const productosSho = productosDb[0]['shoppingCar'] ? productosDb[0]['shoppingCar'] : []
      state.productos = []
      for (const iterator of productosSho) {
        let valorCantidad = iterator.CartProduct
        let formatedInfo = {
          cantidad: valorCantidad.quantity,
          id: iterator.id,
          price: iterator.price,
          quantity: valorCantidad.quantity
        }
        const existingProduct = state.productos.find((element) => element.id === formatedInfo.id);

        if (!existingProduct) {          
          state.productos.push({ ...formatedInfo, cantidad: valorCantidad.quantity, quantity: valorCantidad.quantity });
        }

        productosFinal.push(formatedInfo)
      }
      
    }
  }
});


export const { eliminarProducto, limpiarCarrito, sincronizarDB } = carritoSlice.actions;

export default carritoSlice.reducer;
