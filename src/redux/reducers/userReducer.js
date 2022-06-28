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
    authGoogleProvider: (state, action) => {
      state.isAuth = true;
      state.uid = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.uid = null;
    },
  },
});

export const { toggleAuth, authGoogleProvider, logout } = userSlice.actions;

export default userSlice.reducer;
