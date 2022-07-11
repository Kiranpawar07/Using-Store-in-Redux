import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  cat: 2500701
};
export const Reducer = createReducer(initialState, {
  withdraw: (state, action) => {
    if (state.cat > 9999) {
      state.cat -= 10000;
    } else {
      alert('Available balance is below "10000"');
    }
  },
  Addbyinput: (state, action) => {
    const x = -action.payload + state.cat;
    if (+x >= 0) {
      +action.payload > 0
        ? (state.cat -= action.payload)
        : alert("Enter correct Amount");
    } else {
      alert("Wrong amount entered");
    }
  },
  sub: (state, action) => {
    if (state.cat > 4999) {
      state.cat -= 5000;
    } else {
      alert('Available balance is below "5000"');
    }
  }
});
