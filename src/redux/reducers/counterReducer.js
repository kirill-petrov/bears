import { createSlice } from '@reduxjs/toolkit';

const data = JSON.parse(localStorage.getItem('rSandbox') || '{}');

const initialState = {
  count: data.counter ? data.counter.count : 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
