import { useDispatch } from "react-redux";

const EditBtn = ({ editTask, setUpdate, item }) => {

  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="optional-btn"
      onClick={() => {
        dispatch(editTask(item.id))
        setUpdate({
          title: item.title,
          isDone: item.isDone ? false : true,
          isDelete: item.isDelete? false : true,
          isImportant: item.isImportant ? false : true,
          id: item.id
        })
      }}
    >
      edit
    </button>
  );
};

export default EditBtn;