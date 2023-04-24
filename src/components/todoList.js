import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);

  return (
    <ul className="list-wrapper">
      {todos.map((todo, index) => (

        <TodoItem
          key={todo.id}
          {...todo}
          index = {index}
        />

      ))}
    </ul>
  );
};

export default TodoList;

