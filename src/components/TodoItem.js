import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo, importantSelectTodo, editTodo} from '../store/todoSlice';

const TodoItem = ({ id, text, done, important, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-item">
      <input
        type='checkbox'
        onChange={() => dispatch(toggleComplete({id}))}
      />

      <div className={
        done ? "done" : "" || 
        important ? "important" : ""}
      >
        <div className="list-text">
          <span className={important ? "list-number-imp" : "list-number"}>
            {index + 1 + "."}
          </span>
          <span>{text}</span>
        </div>
      </div>

      <div className="list-buttons">
        <button
          type="button"
          className={ important ? "imp-btn" : "optional-btn"}
          onClick={() => dispatch(importantSelectTodo({id}))}
        >
          important
        </button>

        <button
          type="button"
          className="optional-btn"
          onClick={() => dispatch(editTodo({id}))}
        >
          edit
        </button>

        <button 
          type="button"
          className="optional-btn"
          onClick={() => dispatch(removeTodo({id}))}
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;