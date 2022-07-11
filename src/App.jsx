import { Provider } from "react-redux";
import React, { Component } from "react";

import "./App.css";
import store from "./store";
import Withdraw from "./Withdraw";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Withdraw />
      </div>
    </Provider>
  );
}
