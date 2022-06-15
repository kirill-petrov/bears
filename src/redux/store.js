import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// store.subscribe(() => {
//   localStorage.setItem('rSandbox', JSON.stringify(store.getState()));
// });

export default store;
