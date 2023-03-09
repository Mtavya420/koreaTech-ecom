import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  products: [],
  searchProduct: "",
};

// Actual Slice
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Action to set the authentication status
    setProductsState(state, action) {
      state.products = action.payload;
    },
    setSearchProductsState(state, action) {
      state.searchProduct = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setProductsState, setSearchProductsState } =
  productsSlice.actions;

export const selectProductsState = (state) => state.products;

export default productsSlice.reducer;
