import { useDispatch } from "react-redux";

const UpdateBtn = ({ upDateTask, task }) => {

  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="editing-btn addTask-btn"
      onClick={() => dispatch(upDateTask(task))}
    >
      Update
    </button>
  );
};

export default UpdateBtn;