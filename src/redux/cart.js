import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return {
        ...state,
        [action.payload]: state[action.payload] ? state[action.payload] + 1 : 1,
      };
    },
    removeProduct: (state, action) => {
      if (state[action.payload] === 1) {
        delete state[action.payload];
        return state;
      } else
        return {
          ...state,
          [action.payload]: state[action.payload] - 1,
        };
    },
    removeAll: () => [],
  },
});

export const { addProduct, removeProduct, removeAll } = cart.actions;

export default cart.reducer;
