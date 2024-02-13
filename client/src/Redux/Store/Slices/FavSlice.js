import { createSlice } from "@reduxjs/toolkit";



const favoritosSlice = createSlice({
    name: "favoritos",
    initialState: {
        favoritos: JSON.parse(localStorage.getItem('favoritos')) || [],
    },
    reducers: {
        addFavorito: (state, action) => {
            state.favoritos.push(action.payload);
            localStorage.setItem('favoritos', JSON.stringify(state.favoritos));
        },
        deleteFavorito: (state, action) => {
            state.favoritos = state.favoritos.filter((favorito) => favorito.id !== action.payload);
            localStorage.setItem('favoritos', JSON.stringify(state.favoritos));
        },
    },
});



export const { addFavorito, deleteFavorito } = favoritosSlice.actions;
export default favoritosSlice.reducer;

