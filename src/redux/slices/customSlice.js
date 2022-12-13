import { createSlice, current } from "@reduxjs/toolkit";

export const customSlice = createSlice({
  name: "custom",
  initialState: {
    c: 0
  },
  reducers: {
    increment: (state, action) => {
      state.c += 1;
    },
  
    decrement: (state) => {
      state.c -= 1;
    },
    reset: (state) => {
        state.c=0;
    },
    incrementByValue: (state, action) => {
        state.c += action.payload;
    }
  },
});
export const { increment, incrementByValue, decrement,reset} =
  customSlice.actions;
export default customSlice.reducer;
