import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./reducer";
// import { custRed } from "./Reducer";
const store = configureStore({
  reducer: {
    // custRed: custRed
    Reducer: Reducer
  }
});
export default store;
