import { useDispatch } from "react-redux";
import { editTodo } from "../store/todoSlice";

const EditTodoForm = ({ value,  editTodo, id }) => {
  const dispatch = useDispatch()

  return (
    <div className="addTask">
      
      <input
        className="task-input h"
        type="text"
        placeholer='update'
        value={value.text}
        onChange={() => dispatch(editTodo({id}))}
      />

      <div className="edit-list-buttons">
        <button
          type="button"
          className="editing-btn addTask-btn"
        >
          update
        </button>

        <button
          type="button"
          className="editing-btn addTask-btn"
        >
          Cancel
        </button>

      </div>

    </div>
  );
};

export default EditTodoForm;