import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        return state.forEach((product) =>
          product === existingProduct
            ? (product.count = product.count + 1)
            : product
        );
      } else return [...state, { ...action.payload, count: 1 }];
    },

    removeProduct: (state, action) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct && existingProduct.count === 1) {
        return state.filter((product) => product.id !== existingProduct.id);
      } else if (existingProduct && existingProduct.count > 1) {
        return state.forEach((product) =>
          product === existingProduct
            ? (product.count = product.count - 1)
            : product
        );
      } else return;
    },

    addByNumber: (state, action) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );

      return state.forEach((product) =>
        product === existingProduct
          ? (product.count = action.payload.count)
          : product
      );
    },

    removeAll: () => [],
  },
});

export const {
  addProduct,
  removeProduct,
  addByNumber,
  updateByNumber,
  removeAll,
} = cart.actions;

export default cart.reducer;
