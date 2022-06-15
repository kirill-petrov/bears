import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  localStorage.setItem('bear', JSON.stringify(store.getState()));
});

export default store;
