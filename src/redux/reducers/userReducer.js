import { createSlice } from '@reduxjs/toolkit';

const data = JSON.parse(localStorage.getItem('bear') || '{}');

const initialState = {
  isAuth: data.user ? data.user.isAuth : false,
  isAdmin: true, // !
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleAuth: (state) => {
      // ! toggleAuth только для разработки
      state.isAuth = !state.isAuth;
    },
    authPhoneNumber: (state, action) => {
      state.isAuth = true;
      const { uid, phoneNumber, role } = action.payload;
      state.uid = uid; // чтобы вывести отчёты текущего юзера
      state.phoneNumber = phoneNumber; // чтобы добавить в отчёт
      if (role) state.role = role;
    },
    logout: (state) => {
      // todo нужно получше решение
      state.isAuth = false;
      state.isAdmin = false;
      state.uid = null;
      state.phoneNumber = null; // todo не стирать чтобы подставлять в инпут
      // ! state.role должна остаться, если не обнулять
    },
  },
});

export const { toggleAuth, authPhoneNumber, logout } = userSlice.actions;

export default userSlice.reducer;
