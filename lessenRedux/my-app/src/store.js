import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter/counterSlice";
import { UsersAI } from "./Counter/UsersAI";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [UsersAI.reducerPath]: UsersAI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UsersAI.middleware),
});
// console.log("store", store);
