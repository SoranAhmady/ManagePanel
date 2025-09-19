import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../servises/Servises";

export const UserAxios = createAsyncThunk("users/fetchUser", async (method) => {
  const response = await api.get(method);
  return { method: method, response: response.data };
});

const initialState = {
  isLogin: false,
  users: [],
  error: false,
  loding: false,
  role: "",
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    Checkuser: (state, action) => {
      const user = state.users.find(
        (item) =>
          item.number == action.payload.number &&
          item.password == action.payload.password
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        state.isLogin = true;
      } else {
        state.isLogin = false;
        state.error = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserAxios.pending, (state) => {
        state.error = false;
      })
      .addCase(UserAxios.fulfilled, (state, action) => {
        state.error = false;
        state.users = action.payload.response;
      })
      .addCase(UserAxios.rejected, (state, action) => {
        state.error = false;
      });
  },
});

export default UserSlice.reducer;
export const { Checkuser } = UserSlice.actions;
