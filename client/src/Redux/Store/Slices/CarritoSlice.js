// carritoSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    productos: [],
  },
  reducers: {
    anadirProducto: (state, action) => {
        
      const { producto } = action.payload;


      //Buenas santi, aca esta el error, de que me devuelve undefined envez del producto, no se porque JAJAJA. pero avance bastante
      console.log("ACA ESTA EL PRODUCTO DEL AÑADIR " + producto)
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
