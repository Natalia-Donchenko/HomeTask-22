import UpdateBtn from "./btns/updateBtn";
import CanselBtn from "./btns/canselBtn";

const EditTask = ({ update, setUpdate, upDateTask, task }) => {

  return (
    <>
      <input
        className="task-input"
        type="text"
        placeholder="update"
        value={update.title}
        onChange={(e) => setUpdate(e.target.value)}
      />

      <div className="edit-list-buttons">
        <UpdateBtn 
          upDateTask = {upDateTask}
          task = {task}
        />

        <CanselBtn />
      </div>
    </>
  );
};

export default EditTask;