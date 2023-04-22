import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isImportant, isDone, upDateTask } from './redux/reducers/tasks';
import EditTask from './components/editTask';
import AddTask from './components/addTask';
import TodoList from './components/todoList';

function App () {

  const todos = useSelector((store) => store.tasks.todos);

  const editInput = useSelector((store) => store.tasks.editInput);

  const updateTask = useSelector((store) => store.tasks.taskUpdate);

  const [update, setUpdate] = useState(updateTask);

  const [task, setTask] = useState('');

  return (
    <div className='container'>
      <h2 className='total-title'>My tasks</h2>

      <div className="addTask">
        {editInput && editInput ? (
          <EditTask 
            update = {update}
            setUpdate = {setUpdate}
            upDateTask = {upDateTask}
            task = {task}
          />
        ) : (
          <AddTask 
            setTask = {setTask}
            task = {task}
          />
        )}
      </div>

      {todos && todos.length ? ( 
        <TodoList 
          todos = {todos}
          isDone = {isDone}
          isImportant = {isImportant}
          setUpdate = {setUpdate}
        />
       ) : ( 
        <div className='counter'>No Tasks</div>
       )}   
    </div>
  )
}

export default App;