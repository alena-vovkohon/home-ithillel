import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../constants/constants";

// const fetchData = (id) => {
//   return fetch(`${API_URL}/${id}`);
// };

export const fetchTasks = createAsyncThunk(
  "todos/fetchTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}?_limit=10`);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const json = await response.json();
      const data = json.map((item) => {
        return {
          text: item.title,
          checked: item.completed,
          editable: false,
          id: item.id,
        };
      });
      return data;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "todos/deleteTask",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(response.status);
      }
      dispatch(remove({ id }));
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const checkedFetchTask = createAsyncThunk(
  "todos/checkedFetchTask",
  async (id, { rejectWithValue, dispatch, getState }) => {
    const task = getState().tasks.tasks.filter((item) => item.id === id);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          completed: !task.checked,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error(response.status);
      }
      dispatch(checked({ id }));
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "todos/ubdateTask",
  async (id, { rejectWithValue, dispatch, getState }) => {
    const task = getState().tasks.tasks.filter((item) => item.id === id);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: task.text,
          completed: false,
          editable: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error(response.status);
      }
      dispatch(save({ id }));
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const createTask = createAsyncThunk(
  "todos/createTask",
  async (value, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        body: JSON.stringify({
          title: value,
          completed: false,
          editable: false,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error(response.status);
      }
      const json = await response.json();
      const data = {
        text: json.title,
        checked: json.completed,
        editable: false,
        id: json.id,
      };
      dispatch(add(data));
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const errorSet = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const taskaSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
    status: null,
    error: "",
  },
  reducers: {
    add(state, action) {
      state.tasks.push(action.payload);
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
        if (item.id !== action.payload.index) {
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
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.status = "";
      state.error = "";
    });
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "loading";
      state.error = "";
    });
    builder.addCase(fetchTasks.rejected, errorSet);
    builder.addCase(deleteTask.rejected, errorSet);
    builder.addCase(updateTask.rejected, errorSet);
    builder.addCase(checkedFetchTask.rejected, errorSet);
    builder.addCase(createTask.rejected, errorSet);
  },
});

export const { add, clearn, remove, checked, edit, readValue, save } =
  taskaSlice.actions;
export default taskaSlice.reducer;
