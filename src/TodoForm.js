// TODO FORM 
import React, { useState, useEffect} from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  //const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      // choose number randomly upto 5000
      id: Math.floor(Math.random() * 5000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form text-center'>
      {props.edit ? (
        <>
          <input placeholder='Update your item' value={input} onChange={handleChange} name='text'
            //ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit m-2'>Update</button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a Todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input text-large m-3'
            id='info'
            //ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button bg-primary text-white' id="btn2">
            Add Todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;