import { createSlice } from "@reduxjs/toolkit";

const taskaSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
  },
  reducers: {
    add(state, action) {
      state.tasks.push({
        text: action.payload.value,
        chacked: false,
        editetaple: false,
        id: new Date().toISOString(),
      });
    },
    clearn(state, action) {
      state.tasks = action.payload;
    },
    remuve(state, action) {
      state.tasks = state.tasks.filter(
        (item) => item.id !== action.payload.index
      );
    },
    checked(state, action) {
      state.tasks = state.tasks.map((item) => {
        if (item.id !== action.payload.index) {
          return item;
        }
        return {
          ...item,
          chacked: !item.chacked,
        };
      });
    },
    edite(state, action) {
      state.tasks = state.tasks.map((item) => {
        if (item.id !== action.payload.index) {
          return item;
        }
        return {
          ...item,
          editetaple: true,
        };
      });
    },
    readValue(state, action) {
      state.tasks = state.tasks.map((item) => {
        if (item.id === action.payload.index) {
          return {
            ...item,
            text: action.payload.valueEdite,
          };
        }
        return item;
      });
    },
    save(state, action) {
      state.tasks = state.tasks.map((item) => {
        if (item.id !== action.payload.index) {
          return item;
        }
        return {
          ...item,
          editetaple: false,
          chacked: false,
        };
      });
    },
  },
});

export const { add, clearn, remuve, checked, edite, readValue, save } =
  taskaSlice.actions;
export default taskaSlice.reducer;
