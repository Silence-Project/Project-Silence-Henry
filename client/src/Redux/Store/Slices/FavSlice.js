import { createSlice } from "@reduxjs/toolkit";



const favoritosSlice = createSlice({
    name: "favoritos",
    initialState: {
        favoritos: [],
    },
    reducers: {
        addFavorito: (state, action) => {
            state.favoritos.push(action.payload);
        },
        deleteFavorito: (state, action) => {
            state.favoritos.filter((favorito) => favorito.id !== action.payload);
        },
    },
});



export const { addFavorito, deleteFavorito } = favoritosSlice.actions;
export default favoritosSlice.reducer;

