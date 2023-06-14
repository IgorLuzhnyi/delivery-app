import { configureStore } from "@reduxjs/toolkit";
import restaurantIndex from "./restaurantIndexSlice";

export const store = configureStore({
  reducer: {
    restaurantIndex,
  },
});
