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
    /* editTodo: (state, action) => {
      //   state.todos.filter((todo) => todo.id === action.payload);
      const todoEdit = state.todos.find((todo) => todo.id === action.payload);
      const updateTodo = {
        // todoEdit,
        textVal: action.payload,
      };
    }, */
    updateTodo: (state, action) => {
      let { todos } = state;
      state.todos = todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
