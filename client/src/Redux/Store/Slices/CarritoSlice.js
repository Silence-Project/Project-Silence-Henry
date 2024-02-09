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

export const getCar = createAsyncThunk(
  "cars",
  async () => {
      try {
          const response = await axios.get("http://127.0.0.1:3001/car/cars");
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
          const response = await axios.post("http://127.0.0.1:3001/car/new" , car);

          return response.data;
      }

      catch (error) {
          console.log(error);
      }
  }

)



export const saveProductDb = createAsyncThunk(
  'carrito/saveProductDb',
  async (idUser, idProduct, quantity = 1) => {

    // console.log('dates Save Products');
    // console.log(idUser);
    // console.log('Id Producto: ');
    // console.log(idProduct);
    // console.log(`${idProduct}`);
    // console.log(quantity);

    const config = {
      method: 'post',
      url: 'http://127.0.0.1:3001/car/newProduct'
    };

    const data = {
      carId: idUser,
      productId: idProduct,
      quantity: quantity
    };

    try {
      const response = await axios(config, data);
      return await response;
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
