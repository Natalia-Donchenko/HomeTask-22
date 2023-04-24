const NewTodoForm = ({ value, setText, handleAction }) => {
  return (
    <div className="addTask">
      
      <input
        className="task-input"
        type="text"
        placeholer='What do you want to do?'
        value={value}
        onChange={(e) => setText(e.target.value)}
      />

      <button 
        type='button'
        className="addTask-btn"
        onClick={handleAction}
      >
        add
      </button>

    </div>
  );
};

export default NewTodoForm;