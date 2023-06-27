import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.find(
        (product) => product.productName === action.payload
      );

      if (existingProduct) {
        return state.forEach((product) =>
          product === existingProduct
            ? (product.count = product.count + 1)
            : product
        );
      } else return [...state, { productName: action.payload, count: 1 }];
    },

    removeProduct: (state, action) => {
      const existingProduct = state.find(
        (product) => product.productName === action.payload
      );

      if (existingProduct && existingProduct.count === 1) {
        return state.filter((product) => product !== existingProduct);
      } else if (existingProduct && existingProduct.count > 1) {
        return state.forEach((product) =>
          product === existingProduct
            ? (product.count = product.count - 1)
            : product
        );
      } else return;
    },

    removeAll: () => [],
  },
});

export const { addProduct, removeProduct, removeAll } = cart.actions;

export default cart.reducer;
