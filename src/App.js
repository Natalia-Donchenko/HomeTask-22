import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import EditTodoForm from './components/EditTodoForm';

function App() {
  const [text, setText] = useState('');
 
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  }

  return (
    <div className='container'>
      <h2 className='total-title'>My tasks</h2>

      {/* <EditTodoForm 
        value={text} 
      /> */}
      
      <NewTodoForm
        value={text}
        setText={setText}
        handleAction={handleAction}
      />

      <TodoList />
    </div>
  );
}

export default App;