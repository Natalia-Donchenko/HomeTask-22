import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, isDoneTodo, isImportant } from '../store/todoSlice';
import AddTodo from './AddTodo';

const ListTodo = () => {

  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);
  const [ isEditing, setEditing ] = useState(false); 
  const [ state, setState ] = useState('');
  const { text, id } = state;

  const handleChange = (e) =>{
    setState({...state, [e.target.name]: e.target.value});
  };

  const onEditToggle = ( id, text) => {
    setEditing(true);
    setState({
      ...state, id, text
    });
  };

  const edit = () =>{
    if (text === '') {
      setState({...state});
      return;
    }
    
    dispatch((editTodo({text, id})));
    setEditing(false);
 };

 const canselEdit = () => {
  setEditing(!isEditing);
};

  return (
    <div>
      {
        isEditing ? (
          <div className="addTask">
            <input 
              className="task-input h"
              type='text' 
              value={text} 
              name='text' 
              onChange={handleChange}
            />

            <div className="edit-list-buttons">
              <button 
                type='button' 
                className="editing-btn addTask-btn" 
                onClick={edit}
              >
                update
              </button>

              <button
                type="button"
                className="editing-btn addTask-btn"
                onClick={canselEdit}
              >
                cansel
              </button>
            </div>   
          </div>
        ) : (
          <AddTodo />
        )
      }

      <ul className="list-wrapper">
        {
          todoList.map(({id, text, done, important})=> {
            return (
              <li className="list-item" key={id}>
                <input 
                  type='checkbox'
                  onChange={() => dispatch(isDoneTodo({id}))}
                />

                <div className={done ? "done" : ""  || important ? " important" : "" }>
                  <div className="list-text">
                    <span className='text'>{text}</span>
                  </div>
                </div>

                <div className="list-buttons">
                  <button
                    type="button"
                    onClick={() => dispatch(isImportant({id}))}
                    className={ done ? "btn-done": "" || important ? "imp-btn" : "optional-btn"}
                  >
                    important
                  </button>

                  <button
                    type="button"
                    className={done ? "btn-done" : "optional-btn"}
                    onClick={() =>onEditToggle(id, text)}
                  >
                    edit
                  </button>

                  <button
                    type="button"
                    className="optional-btn"
                    onClick={() => dispatch(deleteTodo({id}))}
                  >
                    delete
                  </button>
                </div>
              </li>
            )
          }) 
        }
      </ul>
    </div>
  );
};

export default ListTodo;