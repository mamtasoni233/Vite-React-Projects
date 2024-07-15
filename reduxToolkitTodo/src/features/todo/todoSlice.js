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
    // updateTodo: (state, action) => {
    //   // let { todos } = state;
    //   // state.todos = todos.map((item) =>
    //   //   item.id === action.payload.id ? action.payload : item
    //   // );
    //   // let { todos } = state;
    //   // return todos.map((todo) => {
    //   //   const item = todo.item;
    //   //   if (todo.id === action.payload.id) {
    //   //     return {
    //   //       ...todo,
    //   //       [item]: action.payload.textVal,
    //   //     };
    //   //   }
    //   //   return todo;
    //   // });
    //   /* state.todos = state.todos.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return {
    //         ...todo,
    //         textVal: action.payload.textVal,
    //       };
    //     }
    //     return todo;
    //   }); */
    //   state.todos = state.todos.filter((todo) => todo.id === action.payload);
    //   console.log('state.todos', state.todos);
    // },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
