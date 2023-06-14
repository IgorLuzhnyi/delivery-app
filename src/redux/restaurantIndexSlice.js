import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const restaurantIndexSlice = createSlice({
  name: "currentRestaurant",
  initialState,
  reducers: {
    selectIndex: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectIndex } = restaurantIndexSlice.actions;

export default restaurantIndexSlice.reducer;
