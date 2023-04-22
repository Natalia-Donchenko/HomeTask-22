import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/reducers/tasks";
import DeleteBtn from "./btns/deleteBtn";
import EditBtn from "./btns/editBtn";
import ImportantBtn from "./btns/importantBtn";

const TodoList = ({ todos, isDone, isImportant, setUpdate }) => {

  const dispatch = useDispatch();

  return (
    <>
      <ul className="list-wrapper">
        {todos.map((item, index) =>(
          <li 
            key={item.id} 
            className="list-item"
          >
            <div className="list-item-text">
              <input
                type="checkbox"
                onClick={() => dispatch(isDone(item.id))}
              />
    
              <div 
                className={
                item.isDone ? "done" : "" ||
                item.isImportant ? "important" : ""}
              >
                <div className="list-text">
                  <span className="list-number">{index + 1 + "."}</span>
                  {item.title.trim()}
                </div>
              </div>
            </div>
                      
            <div className="list-buttons">
              <ImportantBtn 
                isImportant = {isImportant}
                item = {item}
              />
    
              <EditBtn 
                editTask = {editTask} 
                setUpdate = {setUpdate}
                item = {item}
              />
    
              <DeleteBtn 
                deleteTask = {deleteTask}
                item = {item}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;