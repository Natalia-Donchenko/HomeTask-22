import { useDispatch } from "react-redux";

const AddBtn = ({ task, setTask, addTask }) => {

  const dispatch = useDispatch();

  return (
    <button
      type='button'
      className="addTask-btn"
      onClick={() => {
        dispatch(addTask(task))
        setTask('')
      }}
    >
      Add
    </button>
  )
};

export default AddBtn;