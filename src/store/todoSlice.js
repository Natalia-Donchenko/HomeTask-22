import { createSlice } from '@reduxjs/toolkit';

export const TodoSlider = createSlice({
  name: 'todo',
  initialState: {
    todoList:   [],
  },
  reducers: {
    addTodo: (state, action) => {
      let newTodoList = {   
        id: Math.round(Math.random() * 100000),
        text: action.payload.newText,
        edit: false,
        done: false,
        important: false,
      }
      state.todoList.push(newTodoList);
    },
    deleteTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) => item.id === action.payload.id ? action.payload : item);
      state.todoList.edit = !state.todoList.edit;
    },
    isDoneTodo: (state, action) => {
      const todo = state.todoList.find((item) => item.id === action.payload.id);
      todo.done = !todo.done;
    },
    isImportant: (state, action) => {
      const todo = state.todoList.find((item) => item.id === action.payload.id);
      todo.important = !todo.important;
    }
  },
});

export const { addTodo, deleteTodo, editTodo, isDoneTodo, isImportant } = TodoSlider.actions;

export default TodoSlider.reducer;