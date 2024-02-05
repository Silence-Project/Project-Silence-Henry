// carritoSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


// export const getCarrito = createAsyncThunk(
//   "carrito",
//   async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:3001/carrito");

//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// )

export const createOrder = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:3001/carrito");

    return response.data;
  }
  catch (error) {
    console.log(error);
  }
}


export const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    productos: [],
  },
  reducers: {
    anadirProducto: (state, action) => {
        
      const producto = action.payload;


      console.log(producto)
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
