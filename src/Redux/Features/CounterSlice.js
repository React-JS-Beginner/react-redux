import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  /* initialState: {
    count: 0,
  }, */ // This will work also
  initialState: initialStateValue,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    /* decrement: (state) => {
      state.count -= 1;
    }, */
    decrement: (state, action) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
    /* reset: (state, action) => {
      state.count = action.payload;
    }, */
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
