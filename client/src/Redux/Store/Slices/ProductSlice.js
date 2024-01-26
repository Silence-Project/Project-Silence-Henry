import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";


export const getProducts = createAsyncThunk(
    "products",
    async () => {
        try {
            const response = await axios.get("http://127.0.0.1:3001/products");
            localStorage.setItem("products", JSON.stringify(response.data));

            return response.data;
        }

        catch (error) {
            console.log(error);
        }}
)

export const getByCodigo = createAsyncThunk(
    "getByCodigo",
    async (codigo) => {
        try {
            const response = await axios.get(`http://127.0.0.1:3001/products/?codigo=${codigo}`);
            localStorage.setItem("products", JSON.stringify(response.data));

            return response.data;
        }   
        catch (error) {
            console.log(error);
        }
    }
)



const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        products: [],
        error: null,
    },
    // name: "productDetail",
    // initialState: {
    //     loading: false,
    //     productsDetail: [],
    //     error: null,
    // },
    reducers: { 
       
     },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.loading = true
            state.products = []
            state.error = null
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            if (action.payload) {
            state.loading = false
            state.products = action.payload
            state.error = null   
            } else {
                state.loading = false
                state.products = []
                state.error = action.error.message
            }
            
        }  )
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
    

        // productsDetail: (state, action) => {

        //     state.loading = false;
        //     state.productsDetail = action.payload;
        //     state.error = error.message

        // }

    }
);


// export const { getProducts  } = productSlice.actions;
// , productsDetail


export default productSlice.reducer;

