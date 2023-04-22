import { useDispatch } from "react-redux";

const DeleteBtn = ({ deleteTask, item }) => {

  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="optional-btn"
      onClick={() => dispatch(deleteTask(item.id))}
    >
      delete
    </button>
  );
};

export default DeleteBtn;