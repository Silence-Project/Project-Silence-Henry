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

export const getById = createAsyncThunk(
    "productsDetails",
    async (id) => {
        try {
            const response = await axios.get(`http://127.0.0.1:3001/products/${id}`);

            localStorage.setItem("productsDetails", JSON.stringify(response.data));

            return response.data;
        }   
        catch (error) {
            console.log(error);
        }
    }
)

export const postProduct = createAsyncThunk(
    "products/new",
    async (product) => {
        try {
            const response = await axios.post("http://127.0.0.1:3001/products/new" , product);

            return response.data;
        }

        catch (error) {
            console.log(error);
        }
    }

)

export const getCategories = createAsyncThunk(
    "categories",
    async () => {
        try {
            const response = await axios.get("http://127.0.0.1:3001/categories/allCategory");

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
        productsDetails: [],
        categories: [],
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
          })
      }
    
    });
//     extraReducers: (builder) => {
//         builder

//         .addCase(getById.pending, (state) => {
//             state.loading = true
//             state.productsDetails = action.payload + "hola"
//             state.error = null
//         })

//         .addCase(getById.fulfilled, (state, action) => {
//                 state.loading = false
//                 state.productsDetails = action.payload + "hola"
//                 state.error = null
            
//         })

//         .addCase(getById.rejected, (state, action) => {
//             state.loading = false
//             state.productsDetails = []
//             state.error = action.error.message
//         })

//         .addCase(getProducts.pending, (state) => {
//             state.loading = true
//             state.products = []
//             state.error = null
//         })
//         .addCase(getProducts.fulfilled, (state, action) => {
//             if (action.payload) {
//             state.loading = false
//             state.products = action.payload
           
//             state.error = null   
//             } else {
//                 state.loading = false
//                 state.products = []

//                 state.error = action.error.message
//             }
            
//         }  )
//         .addCase(getProducts.rejected, (state, action) => {
//             state.loading = false
//             state.products = []
//             state.productsDetails = action.payload
//             state.error = action.error.message
//         })

//     }
    

//         // productsDetail: (state, action) => {

//         //     state.loading = false;
//         //     state.productsDetail = action.payload;
//         //     state.error = error.message

//         // }

//     }
// );


// export const { getProducts  } = productSlice.actions;
// , productsDetail


export default productSlice.reducer;

