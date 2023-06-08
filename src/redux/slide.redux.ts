import { createSlice } from "@reduxjs/toolkit";

const authSlide = createSlice({
  name: "auth",
  initialState: {
    login: {
      isFetching: false,
      error: false,
      userCurrent: null,
    },
  },
  reducers: {
    startLogin: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.error = false;
      state.login.userCurrent = action.payload;
    },
    errorLogin: (state) => {
      state.login.error = true;
    },
    logoutSuccess: (state) => {
      state.login.userCurrent = null;
    },
    logoutError: (state) => {
      state.login.error = true;
    },
  },
});
export const {
  startLogin,
  loginSuccess,
  errorLogin,
  logoutSuccess,
  logoutError,
} = authSlide.actions;
export default authSlide.reducer;
