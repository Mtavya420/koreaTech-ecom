import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { productsSlice } from "./productsSlice";
import { createWrapper } from "next-redux-wrapper";

const configStore = () => {
  return configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [productsSlice.name]: productsSlice.reducer,
    },
    devTools: true,
  });
};

export let store;

const makeStore = () => {
  store = configStore();
  return store;
};

export const wrapper = createWrapper(makeStore);
