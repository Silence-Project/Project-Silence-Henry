import { CreateSlice } from "@reduxjs/toolkit";

const productSlice = CreateSlice({
    name: "product",
    initialState: {
        loading: false,
        products: [],
        error: null,
    },
    name: "productDetail",
    initialState: {
        loading: false,
        productsDetail: [],
        error: null,
    },
    reducers: {
        getProducts: (state, action) => {

            state.loading = true;
            state.products = action.payload;
            state.error = error.message
        },

        productsDetail: (state, action) => {

            state.loading = false;
            state.productsDetail = action.payload;
            state.error = error.message

        }

    }
});


export const { getProducts , productsDetail } = productSlice.actions;

export default productSlice.reducer;

