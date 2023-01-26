import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
};

export const fetchUserById = createAsyncThunk(
  "todos/fetchTodos",
  async ({ userID }, thunkAPI) => {
    // console.log("userID, thunkAPI", userID, thunkAPI);
    const response = await fetchData(userID);
    const data = await response.json();
    // console.log("response", data);
    return data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    users: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    // console.log("builder", builder);
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      //   console.log("action.payload", action.payload);
      state.users.push(action.payload);
    });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
