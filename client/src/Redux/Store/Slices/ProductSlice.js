import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getProducts = createAsyncThunk("products", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://127.0.0.1:3001/products");
    localStorage.setItem("products", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue([]); // Aquí usamos rejectWithValue para pasar un valor de error personalizado
  }
});

export const getById = createAsyncThunk("productsDetails", async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:3001/products/${id}`);

    localStorage.setItem("productsDetails", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const postProduct = createAsyncThunk("products/new", async (product) => {
  console.log(product);
  try {
    const response = await axios.post(
      "http://127.0.0.1:3001/products/new",
      product
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getCategories = createAsyncThunk("categories", async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:3001/categories/allCategory"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
});


export const updateProduct = createAsyncThunk("products/update", async (product) => {
  try {
    const response = await axios.put(`http://127.0.0.1:3001/products/update/${product.id}`, product);

    return response.data;
  }
  catch (error) {
    console.log(error);
  }})


export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:3001/products/delete/${id}`);

    return response.data;
  }
  catch (error) {
    console.log(error);
  }
})



const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: [],
    productsDetails: [],
    categories: [],
    error: null,
  },

  reducers: { 
    editProduct(state, action) {
      // Aquí deberías conectar el endpoint PUT /api/products/:productId para actualizar el producto en el backend
      // Luego, puedes actualizar el estado con los datos actualizados del producto
      const { productId, updatedProduct } = action.payload;
      state.products = state.products.map(product =>
        product.id === productId ? updatedProduct : product
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.loading = false;
        state.productsDetails = action.payload;
        state.error = null;
      })
      .addCase(getById.rejected, (state, action) => {
        state.loading = false;
        state.productsDetails = [];
        state.error = action.error.message;
      })

      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      })

      .addCase(postProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(postProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })

      .addCase(postProduct.rejected, (state, action) => {
        state.loading = false;
        state.products = "ERROR FORM POST";
        state.error = action.error.message;
      })

      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })

      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.categories = [];
        state.error = action.error.message;
      });


  },
});


export const { editProduct } = productSlice.actions;

export default productSlice.reducer;
