import { configureStore } from "@reduxjs/toolkit";
import taskaSlice from "./tasksSlice";

export default configureStore({
  reducer: {
    tasks: taskaSlice,
  },
});
