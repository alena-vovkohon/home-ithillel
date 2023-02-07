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
        checked: false,
        editable: false,
        id: new Date().toISOString(),
      });
    },
    clearn(state, action) {
      state.tasks = action.payload;
    },
    remove(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
    },
    checked(state, action) {
      state.tasks = state.tasks.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          checked: !item.checked,
        };
      });
    },
    edit(state, action) {
      state.tasks = state.tasks.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          editable: true,
        };
      });
    },
    readValue(state, action) {
      state.tasks = state.tasks.map((item) => {
        if (item.id === action.payload.id) {
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
        if (item.id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          editable: false,
          checked: false,
        };
      });
    },
  },
});

export const { add, clearn, remove, checked, edit, readValue, save } =
  taskaSlice.actions;
export default taskaSlice.reducer;
