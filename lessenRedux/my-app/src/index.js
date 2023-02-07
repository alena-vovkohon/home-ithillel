import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Counter from "./Counter/Counter";
import { Provider } from "react-redux";
import { store } from "./store";
// import { counterSlice } from "./Counter/counterSlice";
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
//   // other options e.g middleware, go here
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>
);
