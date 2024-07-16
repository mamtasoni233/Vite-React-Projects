import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      textVal: 'hello',
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        textVal: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      //   state.todos.findIndex((todo) => todo.id !== action.payload);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, textVal } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.textVal = textVal;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
