import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [ state, setState ] = useState('');
  const { text } = state;
   
  const add = () => {
    if(text === '') {
      setState({...state});
    };
    
    dispatch(addTodo({newText: text}));
    setState({...state, text: ''});
  }

  const handleChange = (e) =>{
    setState({...state, [e.target.name]: e.target.value});
  };

  return  (
    <div className='addTask'>
      <input 
        className="task-input"
        placeholer='What do you want to do?'
        type='text' 
        value={text} 
        name='text' 
        onChange={handleChange} 
      />

      <button 
        type='button' 
        className="addTask-btn"
        onClick={add}
      >
         Add
      </button>
    </div>
  );
};

export default AddTodo;
