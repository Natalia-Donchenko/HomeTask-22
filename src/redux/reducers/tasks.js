import initialState from "./initialState";

const ADD = 'ADD';
const DELETE = 'DELETE';
const IMPORTANT = 'IMPORTANT';
const DONE = 'DONE';
const EDIT = 'EDIT';
const UPDATE = 'UPDATE';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        todos: [...state.todos, {
          title: action.title,
          isDelete: false,
          isImportant: false,
          isDone: false,
          id: Math.floor(Math.random() * 1000000)
        }],
        count: state.count + 1
      };
    };
    case DELETE: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
        count: state.count - 1
      };
    };
    case IMPORTANT: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return {...item, isImportant: !item.isImportant}
          };
          return item
        })
      };
    };
    case DONE: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return {...item, isDone: !item.isDone}
          };
          return Object.assign(item)
        })
      };
    };
    case EDIT: {
      return {
        ...state,
        taskUpdate: state.todos.find((item) => item.id === action.id),
        
        editInput: !state.editInput
      };
    };
    case UPDATE: {
      
      return {
        ...state,
        
        
      };
    };
    default: return state;
  };
};

export const addTask = (title) => {
  return (dispatch) => {
    return dispatch({type: ADD, title})
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    return dispatch({type: DELETE, id})
  };
};

export const isImportant = (id) => {
  return (dispatch) => {
    return dispatch({type: IMPORTANT, id})
  };
};

export const isDone = (id) => {
  return(dispatch) => {
    return dispatch({type: DONE, id})
  };
};

export const editTask = (id) => {
  return(dispatch) => {
    return dispatch({type: EDIT, id})
  };
};

export const upDateTask = (id) => {
  return(dispatch) => {
    return dispatch({type: UPDATE, id})
  };
};