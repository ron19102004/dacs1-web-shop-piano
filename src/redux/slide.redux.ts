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

const productSlide = createSlice({
  name: "product",
  initialState: {
    products: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    startUpdateProduct: (state) => {
      state.isFetching = true;
    },
    updateProduct: (state, action) => {
      state.products = action.payload;
    },
    errorUpdateProduct: (state) => {
      state.error = true;
    },
  },
});
export const { startUpdateProduct, updateProduct, errorUpdateProduct } =
  productSlide.actions;

const authReducer = authSlide.reducer;
const productReducer = productSlide.reducer;
export { authReducer, productReducer };
