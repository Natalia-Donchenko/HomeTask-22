import { useDispatch } from "react-redux";

const ImportantBtn = ({ isImportant, item }) => {

  const dispatch = useDispatch();
  
  return (
    <button
      type="button"
      className="optional-btn"
      onClick={() => dispatch(isImportant(item.id))}
    >
      Important
    </button>
  );
};

export default ImportantBtn;