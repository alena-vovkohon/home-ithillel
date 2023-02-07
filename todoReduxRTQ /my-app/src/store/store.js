import { configureStore } from "@reduxjs/toolkit";
import { TasksApi } from "./TasksApi";

export const store = configureStore({
  reducer: {
    [TasksApi.reducerPath]: TasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TasksApi.middleware),
});
