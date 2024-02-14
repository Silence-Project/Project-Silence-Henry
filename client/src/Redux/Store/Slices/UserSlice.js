import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import URLTOCHANGE from "../../../Helpers/routesToChange";

export const signUp = createAsyncThunk(
  "user/signUp",
  async (userCredentials) => {
    try {
      const response = await axios.post(
        `${URLTOCHANGE.theUrl}/usuarios`,
        userCredentials
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log("SignUp Response:", response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async (userCredentials) => {
    const request = await axios.get(
      `${URLTOCHANGE.theUrl}/usuarios/login`,
      userCredentials
    );
    const response = await request.data.data;

    localStorage.setItem("user", JSON.stringify(response));
    console.log("SignIn Response:", response);
    return response;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ id, values }) => {
    try {
      const response = await axios.patch(
        `${URLTOCHANGE.theUrl}/usuarios/${id}`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    //   const updateProfile = (values) => {
    //     const profile = {
    //         ...JSON.parse(localStorage.getItem('user')),
    //         ...values
    //     };
    //     localStorage.setItem('user', JSON.stringify(profile));
    // }
    // updateProfile(values);

      localStorage.setItem("user", JSON.stringify(response.data.myUser));
      // console.log("UpdateUser Response:", response.data);
      // console.log('myUser deberia ser el obj usuario: ', response.data.myUser);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const gettingUser = createAsyncThunk("user/gettingUser", async (id) => {
  try {
    const response = await axios.get(`${URLTOCHANGE.theUrl}/usuarios/${id}`);

    localStorage.setItem("user", JSON.stringify(response.data));
    // console.log("gettingUser Response:", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        console.log("SignUp Pending");
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        console.log("SignUp Fulfilled", action.payload);
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        console.log("SignUp Rejected", action.error);
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signIn.pending, (state) => {
        console.log("SignIn Pending");
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        console.log("SignIn Fulfilled", action.payload);
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        console.log("SignIn Rejected", action.error);
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        console.log("UpdateUser Pending");
        state.loading = true;
        // state.user = null;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log("UpdateUser Fulfilled", action.payload);
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        console.log("UpdateUser Rejected", action.error);
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(gettingUser.pending, (state) => {
        // console.log("gettingUser Pending");
        state.loading = true;
        // state.user = null;
        state.error = null;
      })
      .addCase(gettingUser.fulfilled, (state, action) => {
        // console.log("gettingUser Fulfilled", action.payload);
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(gettingUser.rejected, (state, action) => {
        // console.log("gettingUser Rejected", action.error);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
