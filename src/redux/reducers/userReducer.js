import { createSlice } from '@reduxjs/toolkit';

const data = JSON.parse(localStorage.getItem('bear') || '{}');

const initialState = {
  isAuth: data.user ? data.user.isAuth : false,
  isAdmin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { toggleAuth } = userSlice.actions;

export default userSlice.reducer;
