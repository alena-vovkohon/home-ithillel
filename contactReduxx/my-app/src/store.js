import { configureStore } from "@reduxjs/toolkit";
import { UsersAI } from "./Users/UsersAI";

export const store = configureStore({
  reducer: {
    [UsersAI.reducerPath]: UsersAI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UsersAI.middleware),
});
