import { addTask } from "../redux/reducers/tasks";
import AddBtn from "./btns/addBtn";


const AddTask = ({ setTask, task }) => {

  return (
    <>
      <input
        className="task-input"
        type="text"
        placeholder="What do you want to do?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <AddBtn 
        task = {task}
        setTask = {setTask}
        addTask = {addTask}
      />
    </>
  );
};

export default AddTask;