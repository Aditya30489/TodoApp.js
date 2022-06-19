import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className='text-center '>
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)} className='d-inline'>
        {todo.text}
        
      </div>
        <div className='icons d-inline'>
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
          <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
        </div>
      </div>
      </div>
  ));
};

export default Todo;