import { createSlice } from '@reduxjs/toolkit';

const data = JSON.parse(localStorage.getItem('rSandbox') || '{}');

const initialState = data.todo ? data.todo : [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    todoAdd: (state, action) => {
      state.push(action.payload);
    },
    todoDelete: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
    todoChStatus: (state, action) => {
      const id = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        }
        return item;
      });
    },
    todoEdit: (state, action) => {
      const { id, newText } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, text: newText };
        }
        return item;
      });
    },
  },
});

export const { todoAdd, todoDelete, todoEdit, todoChStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
