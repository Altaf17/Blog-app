import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    LOGOUT: (state, action) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;

export default authSlice.reducer;
