import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import URLTOCHANGE from "../../../Helpers/routesToChange";

export const getAllUsers = createAsyncThunk("admin/getAllUsers", async () => {
  try {
    const response = await axios.get(`${URLTOCHANGE.theUrl}/usuarios`);
    return response.data;
  } catch (error) {
    throw Error("Error al obtener los usuarios");
  }
});

export const getTopMsj = createAsyncThunk("admin/getTopMsj", async () => {
  try {
    const response = await axios.get(`${URLTOCHANGE.theUrl}/toptext/texts`);
    return response.data[0].description;
  } catch (error) {
    throw Error("Error al obtener el mensaje");
  }
});

export const updateMsj = createAsyncThunk(
  "admin/updateMsj",
  async (nuevoMensaje) => {
    try {
      const response = await axios.put(`${URLTOCHANGE.theUrl}/toptext/1`, {
        description: nuevoMensaje,
      });
      return nuevoMensaje;
    } catch (error) {
      throw Error("Error al actualizar el mensaje");
    }
  }
);

export const toggleUserStatus = createAsyncThunk(
  "admin/toggleUserStatus",
  async ({ id, isActive }) => {
    const newStatus = isActive ? false : true;
    try {
      const response = await axios.patch(
        `${URLTOCHANGE.theUrl}/usuarios/${id}`,
        { isActive: newStatus }
      );
      return response.data;
    } catch (error) {
      throw new Error("Error al cambiar el estado del usuario");
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    topMsj: null,
    loading: false,
    error: null,
    usuarios: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopMsj.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopMsj.fulfilled, (state, action) => {
        state.loading = false;
        state.topMsj = action.payload;
        state.error = null;
      })
      .addCase(getTopMsj.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateMsj.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMsj.fulfilled, (state, action) => {
        state.loading = false;
        state.topMsj = action.payload;
        state.error = null;
      })
      .addCase(updateMsj.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.usuarios = action.payload;
        state.error = null;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(toggleUserStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleUserStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.usuarios = state.usuarios.map((usuario) =>
          usuario.id === action.payload.id
            ? { ...usuario, isActive: action.payload.isActive }
            : usuario
        );
        state.error = null;
      })
      .addCase(toggleUserStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default adminSlice.reducer;
