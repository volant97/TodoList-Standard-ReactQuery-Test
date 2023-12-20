import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {},
  reducers: {
    getTodo: (state, action) => {
      const todos = action.payload;
      return [...todos];
    },
  },
});

export const { getTodo } = todosSlice.actions;
export default todosSlice.reducer;
