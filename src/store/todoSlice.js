import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
              id: Math.floor(Math.random() * 1000000),
              text: action.payload.text,
              done: false,
              important: false,
              edit: false,
            });
        },
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.done = !toggledTodo.done;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        importantSelectTodo(state, action) {
          const importantTodo = state.todos.find(todo => todo.id === action.payload.id)
          importantTodo.important = !importantTodo.important
        },
        editTodo(state, action) {
          const editingTodo = state.todos.find(todo => todo.id === action.payload.id)
          editingTodo.edit = !editingTodo.edit
        }
    },
});

export const {addTodo, toggleComplete, removeTodo, importantSelectTodo, editTodo} = todoSlice.actions;

export default todoSlice.reducer;